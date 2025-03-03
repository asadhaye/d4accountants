import { ZodError } from "zod";
import { Logger } from "../logger/logger";
import type { ErrorHandlingOptions } from "./types";

export function handleError(error: unknown, options: ErrorHandlingOptions) {
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
  
  Logger[logLevel](category, error instanceof Error ? error.message : String(error), additionalData);
  
  return {
    status: 500,
    message: userMessage || "An unexpected error occurred",
    details: error instanceof Error ? error.message : error
  };
}