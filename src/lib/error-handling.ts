import { ZodError } from "zod";
import Logger from "./logger";

export interface ErrorHandlingOptions {
  category: string;
  userMessage?: string;
  logLevel?: "error" | "warn" | "info";
  additionalData?: Record<string, unknown>;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: unknown
  ) {
    super(message);
  }
}

export function handleError(error: unknown, options: ErrorHandlingOptions) {
  if (error instanceof ZodError) {
    Logger.warn(options.category, "Validation failed", {
      errors: error.errors,
    });
    throw new ApiError("Validation failed", 400, error.errors);
  }

  if (error instanceof ApiError) {
    Logger[options.logLevel || "error"](options.category, error.message, {
      details: error.details,
    });
    throw error;
  }

  Logger.error(options.category, "Unexpected error", { error });
  throw new ApiError(
    options.userMessage || "An unexpected error occurred",
    500
  );
}
// Add retry mechanism
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delayMs = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        handleError(lastError, {
          category: 'retry-exhausted',
          additionalData: { attempts: attempt },
          userMessage: 'Operation failed after multiple attempts'
        });
        break;
      }
      
      await new Promise(resolve => setTimeout(resolve, delayMs * attempt));
    }
  }
  
  throw new Error('Operation failed after maximum retry attempts');
}
