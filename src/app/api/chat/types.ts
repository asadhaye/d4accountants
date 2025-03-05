export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  source?: 'local' | 'openai';
  createdAt?: Date;
}

export interface ChatResponse {
  role: "assistant";
  content: string;
}

export interface ChatError {
  error: string;
}