import { NextResponse } from "next/server";
import { Pipeline } from "@xenova/transformers";
import { BufferMemory } from "langchain/memory";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ConversationChain } from "langchain/chains";
import { XenovaLLMWrapper } from "./xenova-llm";

let pipeline: Pipeline | null = null;
let model: XenovaLLMWrapper | null = null;

const memory = new BufferMemory({
  returnMessages: true,
  inputKey: "input",
  outputKey: "output",
  memoryKey: "chat_history",
});

const prompt = ChatPromptTemplate.fromTemplate(`
You are a professional AI assistant for D4 Accountants, specializing in tax planning, bookkeeping, and financial advisory.
Provide accurate, detailed responses while maintaining a professional tone.

Previous conversation:
{chat_history}

Current query:
Human: {input}
Assistant:`);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!pipeline || !model) {
      pipeline = await Pipeline.create({
        task: "text-generation",
        model: "Xenova/mistral-7b-instruct-v0.1",
        quantized: true,
        progress_callback: (progress: any) => {
          if (progress.status) {
            console.log("Model loading status:", progress.status);
          }
        },
      });
      
      model = new XenovaLLMWrapper(pipeline, {
        maxTokens: 1000,
        temperature: 0.7,
      });
    }

    const chain = new ConversationChain({
      llm: model,
      memory,
      prompt,
    });

    const latestMessage = messages[messages.length - 1];
    const response = await chain.call({
      input: latestMessage.content,
    });

    if (!response.output) {
      throw new Error("No response generated");
    }

    return NextResponse.json({
      role: "assistant",
      content: response.output.trim(),
    }, {
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}