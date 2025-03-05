import { NextResponse } from "next/server";
import { clientPromise } from "@/lib/db/connect";
import { Lead } from "@/lib/db/schema";
import { z } from "zod";
import createDOMPurify from 'isomorphic-dompurify';
import { Logger } from "@/lib/logger/index";
import { rateLimit } from '@/lib/rateLimit'

const DOMPurify = createDOMPurify();

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  serviceInterest: z.string().trim().min(1).max(500),
  message: z.string().optional().transform(val => val || null),
})
type LeadInput = z.infer<typeof leadSchema>;

const sanitizeInput = (input: Record<string, unknown>) => {
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "string") {
      sanitized[key] = DOMPurify.sanitize(value.trim());
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};

export async function POST(request: Request) {
  const MAX_REQUEST_SIZE = 1024 * 10 // 10KB

  // Implement rate limiting
  try {
    const isAllowed = await rateLimit();
    
    if (!isAllowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
  } catch {
    return NextResponse.json({ error: "Rate limit error" }, { status: 500 });
  }

  const contentLength = request.headers.get("content-length")
  if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 })
  }

  let body;
  try {
    body = await request.json();
    Logger.info("api", `Received lead submission from ${body.email}`);

    const sanitizedData = sanitizeInput(body);
    const validatedData = leadSchema.parse(sanitizedData) as LeadInput;

    await clientPromise;

    const lead = new Lead({
      ...validatedData,
      createdAt: new Date(),
    });
    await lead.save();

    Logger.info("api", `Lead captured successfully from ${validatedData.email} for service: ${validatedData.serviceInterest}`);

    const headers = {
      'Content-Security-Policy': "default-src 'self'",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    }

    return NextResponse.json(
      { message: "Lead captured successfully" },
      { status: 201, headers }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      Logger.warn("validation", "Lead validation failed", {
        errors: error.errors,
        input: body,
      });
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 },
      );
    }

    const err = error as Error;
    Logger.error("api", "Failed to process lead", {
      error: err.message,
      stack: err.stack,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
