// Simple logger implementation
const Logger = {
  error: (category: string, message: string, data?: Record<string, unknown>) => {
    console.error(`[ERROR][${category}] ${message}`, data || '');
  },
  
  warn: (category: string, message: string, data?: Record<string, unknown>) => {
    console.warn(`[WARN][${category}] ${message}`, data || '');
  },
  
  info: (category: string, message: string, data?: Record<string, unknown>) => {
    console.info(`[INFO][${category}] ${message}`, data || '');
  },
  
  debug: (category: string, message: string, data?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG][${category}] ${message}`, data || '');
    }
  }
};

export default Logger;

// Removed unused exports:
// LogLevel, LogEntry
