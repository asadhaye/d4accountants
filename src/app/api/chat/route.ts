import { NextResponse } from 'next/server';
import { z } from 'zod';
import { handleError } from '@/lib/errors';
import createDOMPurify from 'isomorphic-dompurify';
import { DB_CONFIG } from '@/lib/config';
import mongoose from 'mongoose';
import { Conversation } from './models/conversation';
import { generateResponse } from './llm-service';

const DOMPurify = createDOMPurify();

// Input validation schema
const chatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  sessionId: z.string().optional(),
  useOpenAI: z.boolean().optional(),
});

// Helper function for generating error responses
const createErrorResponse = (
  message: string, 
  details: unknown, 
  status: number = 400
) => {
  return NextResponse.json({ error: message, details }, { status });
};

export async function POST(request: Request) {
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
    
    // Ensure MongoDB connection
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(DB_CONFIG.uri as string);
    }

    // Get or create conversation
    let conversation = await Conversation.findOne({ sessionId });
    if (!conversation) {
      conversation = new Conversation({ sessionId, messages: [] });
    }

    // Add user message to conversation
    conversation.messages.push({
      role: 'user',
      content: sanitizedMessage,
      createdAt: new Date(),
    });

    // Generate response using the LLM service
    const { text: responseText, source } = await generateResponse(
      conversation.messages
    );
    
    // Sanitize the response
    const sanitizedResponse = DOMPurify.sanitize(responseText);

    // Add assistant's response to conversation
    conversation.messages.push({
      role: 'assistant',
      content: sanitizedResponse,
      createdAt: new Date(),
    });

    // Save the conversation
    await conversation.save();

    // Create response with session ID and model source
    const response = NextResponse.json({
      message: sanitizedResponse,
      sessionId,
      modelSource: source,
    });

    // Add session ID to headers for client tracking
    response.headers.set('X-Session-Id', sessionId);
    response.headers.set('X-Model-Source', source);
    
    return response;
  } catch (error) {
    handleError(error as Error, {
      category: 'chat',
      userMessage: 'Failed to process chat request.',
    });
    return createErrorResponse("Internal server error", {}, 500);
  }
}

// Test endpoint to verify model functionality
export async function GET() {
  try {
    const { text, source } = await generateResponse([{
      role: 'user',
      content: 'What services do you provide for UK businesses?'
    }]);
    return NextResponse.json({ 
      success: true, 
      message: text,
      modelSource: source,
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
