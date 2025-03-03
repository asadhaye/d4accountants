export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatResponse {
  role: "assistant";
  content: string;
}

export interface ChatError {
  error: string;
}