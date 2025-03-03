export interface ErrorHandlingOptions {
  category: string;
  userMessage?: string;
  logLevel?: "error" | "warn" | "info";
  additionalData?: Record<string, unknown>;
}

export interface ErrorResponse {
  status: number;
  message: string;
  details?: unknown;
}