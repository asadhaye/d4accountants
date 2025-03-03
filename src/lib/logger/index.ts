import type { LogLevel, LogCategory } from './types';

export const Logger = {
  error: (category: LogCategory, message: string, data?: Record<string, unknown>) => {
    console.error(`[ERROR][${category}] ${message}`, data || '');
  },
  
  warn: (category: LogCategory, message: string, data?: Record<string, unknown>) => {
    console.warn(`[WARN][${category}] ${message}`, data || '');
  },
  
  info: (category: LogCategory, message: string, data?: Record<string, unknown>) => {
    console.info(`[INFO][${category}] ${message}`, data || '');
  }
};

export type { LogLevel, LogCategory } from './types';