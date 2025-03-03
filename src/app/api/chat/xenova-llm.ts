import { pipeline, env } from '@xenova/transformers';
import type { Text2TextGenerationPipeline } from '@xenova/transformers';

// Configure to use web environment
env.useBrowserCache = true;
env.useCustomCache = false;

let chatPipeline: Text2TextGenerationPipeline | null = null;

const MAX_CHAT_TOKENS = 500;
const TEMPERATURE = 0.7;
const TOP_P = 0.9;

interface GenerationOutput {
  generated_text: string;
}

/**
 * Generates a response using the Mistral-7b-instruct-v0.2 text generation model.
 * @param prompt The input prompt for the model.
 * @returns A promise that resolves to the generated text response.
 * @throws {Error} If the model fails to generate a response.
 */
export async function generateResponse(prompt: string): Promise<string> {
  try {
    if (!chatPipeline) {
      console.log('Loading the text generation pipeline...');
      chatPipeline = await pipeline(
        'text2text-generation',
        'Xenova/mistral-7b-instruct-v0.2',
        {
          revision: 'default',
          quantized: true
        }
      );
      console.log('Text generation pipeline loaded.');
    }

    const output = await chatPipeline(prompt, {
      max_length: MAX_CHAT_TOKENS,
      temperature: TEMPERATURE,
      top_p: TOP_P,
    }) as GenerationOutput[];

    if (!output?.[0]?.generated_text) {
      throw new Error('Failed to generate response');
    }

    return output[0].generated_text;
  } catch (error: unknown) {
    console.error('Error generating response:', error);
    throw error instanceof Error ? error : new Error('Unknown error occurred');
  }
}
