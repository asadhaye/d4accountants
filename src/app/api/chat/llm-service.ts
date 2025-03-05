import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { HumanMessage, SystemMessage, AIMessage } from '@langchain/core/messages';

interface Message {
  role: string;
  content: string;
}

const SYSTEM_PROMPT = `You are a knowledgeable AI assistant specializing in UK accounting services. Your expertise includes:
- UK tax regulations and compliance
- VAT registration and returns
- Bookkeeping and financial reporting
- Payroll services
- Company formation and secretarial services
- Self-assessment tax returns
- Business advisory services

Please provide accurate, professional advice while acknowledging that you are an AI assistant and not a certified accountant.`;

// Initialize Ollama with Zephyr model
const llm = new ChatOllama({
  baseUrl: process.env.OLLAMA_HOST || 'http://localhost:11434',
  model: 'zephyr',
  temperature: 0.7,
});

function convertToLangChainMessages(messages: Message[]) {
  return [
    new SystemMessage(SYSTEM_PROMPT),
    ...messages.map(msg => {
      if (msg.role === 'user') {
        return new HumanMessage(msg.content);
      }
      return new AIMessage(msg.content);
    }),
  ];
}

/**
 * Generates a response using the local Ollama model
 */
export async function generateResponse(messages: Message[]): Promise<{ text: string; source: 'local' }> {
  try {
    const langchainMessages = convertToLangChainMessages(messages);
    const response = await llm.invoke(langchainMessages);

    return {
      text: response.content as string,
      source: 'local'
    };
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}
