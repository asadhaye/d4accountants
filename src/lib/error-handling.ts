import { toast } from "@/components/ui/use-toast";
import Logger from "@/lib/logger";

interface ErrorContext {
  category?: string;
  additionalData?: Record<string, unknown>;
  userMessage?: string;
}

export function handleError(error: Error, context?: ErrorContext) {
  const category = context?.category || "application";
  const errorData = {
    name: error.name,
    message: error.message,
    stack: error.stack,
    ...context?.additionalData,
  };

  Logger.error(category, error.message, errorData);

  toast({
    title: "Error",
    description: context?.userMessage || "An unexpected error occurred. Please try again.",
    // Removed 'variant' since it's not supported by the default toast type
  });

  if (process.env.NODE_ENV === "development") {
    console.error("Error details:", error);
    if (context?.additionalData) {
      console.error("Additional context:", context.additionalData);
    }
  }
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
  
  throw lastError;
}