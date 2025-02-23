import { generateResponse } from './xenova-llm';
import { NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Handles the POST request to the chat API.
 * @param req The request object.
 * @returns A promise that resolves to a Next.js response object.
 */
export async function POST(req: Request) {
  try {
    // Extract messages from the request body
    const { messages } = await req.json() as { messages: ChatMessage[] };

    // Validate the messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      console.warn('Invalid messages format: Messages array is empty or not an array.');
      return NextResponse.json(
        { error: 'Invalid messages format: Messages array must be a non-empty array.' },
        { status: 400 }
      );
    }

    // Validate each message object
    for (const message of messages) {
      if (typeof message !== 'object' || message === null || !('role' in message) || !('content' in message)) {
        console.warn('Invalid message object:', message);
        return NextResponse.json(
          { error: 'Invalid message format: Each message must be an object with "role" and "content" properties.' },
          { status: 400 }
        );
      }
      if (message.role !== 'user' && message.role !== 'assistant') {
        console.warn('Invalid message role:', message.role);
        return NextResponse.json(
          { error: 'Invalid message format: Message role must be "user" or "assistant".' },
          { status: 400 }
        );
      }
      if (typeof message.content !== 'string') {
        console.warn('Invalid message content:', message.content);
        return NextResponse.json(
          { error: 'Invalid message format: Message content must be a string.' },
          { status: 400 }
        );
      }
    }

    // Join the messages into a single prompt
    const prompt = messages.map((m: ChatMessage) => m.content).join('\n');

    // Generate the response using the xenova-llm module
    const response = await generateResponse(prompt);

    // Return the response
    return NextResponse.json({ response }, { status: 200 });
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Chat API error:', errorMessage, errorStack);
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
