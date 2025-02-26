import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateResponse } from "./xenova-llm";
import { ChatMessage } from "@/lib/db/schema";
import { clientPromise } from "@/lib/db/connect";
import { handleError } from "@/lib/error-handling";
import createDOMPurify from 'isomorphic-dompurify';

const DOMPurify = createDOMPurify();

// Input validation schema
const chatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  sessionId: z.string().min(1, "Session ID is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request