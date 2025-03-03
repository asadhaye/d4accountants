import { NextResponse } from "next/server";
import { clientPromise } from "@/lib/db/connect";
import { Lead } from "@/lib/db/schema";
import { z } from "zod";
import createDOMPurify from 'isomorphic-dompurify';
import { Logger } from "@/lib/logger/logger";

const DOMPurify = createDOMPurify();

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceInterest: z.string().min(1),
  message: z.string().optional(),
});

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
  let body;
  try {
    body = await request.json();
    Logger.info("lead-submission", `Received lead submission from ${body.email}`);

    const sanitizedData = sanitizeInput(body);
    const validatedData = leadSchema.parse(sanitizedData) as LeadInput;

    await clientPromise;

    const lead = new Lead({
      ...validatedData,
      createdAt: new Date(),
    });
    await lead.save();

    Logger.info("lead-capture", `Lead captured successfully from ${validatedData.email} for service: ${validatedData.serviceInterest}`);

    return NextResponse.json(
      { message: "Lead captured successfully" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      Logger.warn("lead-validation", "Lead validation failed", {
        errors: error.errors,
        input: body,
      });
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 },
      );
    }

    const err = error as Error;
    Logger.error("lead-processing", "Failed to process lead", {
      error: err.message,
      stack: err.stack,
    });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
