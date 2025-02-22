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