import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { generateResponse } from "./xenova-llm";
import { handleError } from "@/lib/error-handling";
import createDOMPurify from 'isomorphic-dompurify';
import { DB_CONFIG } from "@/lib/config";
import mongoose from "mongoose";

const DOMPurify = createDOMPurify();

// Input validation schema
const chatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  sessionId: z.string().optional(),
});

// Helper function for generating error responses
const createErrorResponse = (message: string, details: any, status: number = 400) => {
  return NextResponse.json({ error: message, details }, { status });
};

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate input
    const result = chatRequestSchema.safeParse(body);
    if (!result.success) {
      return createErrorResponse("Invalid request", result.error.errors);
    }
    
    const { message } = result.data;
    const sessionId = result.data.sessionId || crypto.randomUUID();
    
    // Sanitize input to prevent XSS
    const sanitizedMessage = DOMPurify.sanitize(message);
    
    // Generate response using the LLM
    const responseText = await generateResponse(sanitizedMessage);
    
    // Sanitize the response as well
    const sanitizedResponse = DOMPurify.sanitize(responseText);
    
    // Store the conversation in the database
    try {
      // Ensure we're connected to MongoDB
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(DB_CONFIG.uri as string);
      }
      
      // Store user message
      await mongoose.connection.collection("messages").insertOne({
        role: "user",
        content: sanitizedMessage,
        createdAt: new Date(),
        sessionId,
      });
      
      // Store assistant response
      await mongoose.connection.collection("messages").insertOne({
        role: "assistant",
        content: sanitizedResponse,
        createdAt: new Date(),
        sessionId,
      });
    } catch (dbError) {
      console.error("Failed to store messages:", dbError);
      // Continue even if DB storage fails
    }
    
    // Return the response
    return NextResponse.json({
      response: sanitizedResponse,
      sessionId,
    });
  } catch (error) {
    const errorResponse = handleError(error, {
      category: "chat-api",
      userMessage: "Failed to generate response",
      additionalData: { endpoint: "/api/chat" },
    });
    
    return createErrorResponse(errorResponse.message, errorResponse.details, errorResponse.status);
  }
}
