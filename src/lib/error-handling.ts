import { ZodError } from "zod";
import Logger from "./logger";

export function handleError(error: unknown, options: {
  category: string;
  userMessage?: string;
  logLevel?: "error" | "warn" | "info";
  additionalData?: Record<string, unknown>;
}) {
  const { category, userMessage, logLevel = "error", additionalData } = options;
  
  if (error instanceof ZodError) {
    Logger.warn(category, "Validation failed", {
      errors: error.errors,
      ...additionalData,
    });
    return {
      status: 400,
      message: userMessage || "Validation failed",
      details: error.errors
    };
  }
  
  // Log the error
  Logger[logLevel](category, error instanceof Error ? error.message : String(error), additionalData);
  
  // Return error response
  return {
    status: 500,
    message: userMessage || "An unexpected error occurred",
    details: error instanceof Error ? error.message : error
  };
}

// Removed unused exports:
// ErrorHandlingOptions, ApiError, withRetry, createErrorHandler
