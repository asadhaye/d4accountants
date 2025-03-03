export type LogLevel = "error" | "warn" | "info" | "debug";
export type LogCategory = 
  | "auth" 
  | "db" 
  | "api" 
  | "chat" 
  | "validation" 
  | "security" 
  | "performance" 
  | "analytics";

export interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  category: LogCategory;
  message: string;
  data?: Record<string, unknown>;
  error?: Error;
}

export interface LoggerOptions {
  minLevel?: LogLevel;
  enableConsole?: boolean;
  enableFile?: boolean;
  filePath?: string;
}