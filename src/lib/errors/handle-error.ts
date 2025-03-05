import { ZodError } from "zod";
import { Logger, type LogCategory } from "../logger";
import type { ErrorHandlingOptions } from "./types";

export function handleError(error: unknown, options: ErrorHandlingOptions) {
  const { category, userMessage, logLevel = "error", additionalData } = options;
  
  if (error instanceof ZodError) {
    Logger.warn(category as LogCategory, "Validation failed", {
      errors: error.errors,
      ...additionalData,
    });
    return {
      status: 400,
      message: userMessage || "Validation failed",
      details: error.errors
    };
  }
  
  Logger[logLevel](category as LogCategory, error instanceof Error ? error.message : String(error), additionalData);
  
  return {
    status: 500,
    message: userMessage || "An unexpected error occurred",
    details: error instanceof Error ? error.message : error
  };
}