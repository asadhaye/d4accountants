import { ZodError } from 'zod';
import { Logger } from '@/lib/logger/logger';
import type { ErrorOptions, ErrorResponse } from './types';
import { BaseError } from './base-error';

export function handleError(error: unknown, options: ErrorOptions): ErrorResponse {
  const { category, userMessage, logLevel = 'error', additionalData } = options;

  if (error instanceof ZodError) {
    Logger.warn(category, 'Validation failed', {
      errors: error.errors,
      ...additionalData,
    });
    return {
      status: 400,
      message: userMessage || 'Validation failed',
      details: error.errors,
    };
  }

  if (error instanceof BaseError) {
    Logger[logLevel](category, error.message, additionalData);
    return {
      status: error.status,
      message: userMessage || error.message,
      details: error.stack,
    };
  }

  Logger[logLevel](category, error instanceof Error ? error.message : String(error), additionalData);
  return {
    status: 500,
    message: userMessage || 'An unexpected error occurred',
    details: error instanceof Error ? error.stack : error,
  };
}