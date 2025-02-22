export type LogLevel = "INFO" | "ERROR" | "WARN";

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  category: string;
  message: string;
  data?: Record<string, unknown> | undefined; // Explicitly allow undefined
}

export class Logger {
  private static formatTimestamp(): string {
    return new Date().toISOString();
  }

  private static log(
    level: LogLevel,
    category: string,
    message: string,
    data?: Record<string, unknown>,
  ) {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      level,
      category,
      message,
      data,
    };

    if (process.env.NODE_ENV === "production") {
      // TODO: Implement production logging service
      console.log(JSON.stringify(entry));
    } else {
      console.log(
        `[${entry.timestamp}] [${entry.level}] [${entry.category}] ${entry.message}`,
      );
      if (data) {
        console.log("Additional data:", data);
      }
    }
  }

  static info(category: string, message: string, data?: Record<string, unknown>) {
    this.log("INFO", category, message, data);
  }

  static error(category: string, message: string, data?: Record<string, unknown>) {
    this.log("ERROR", category, message, data);
  }

  static warn(category: string, message: string, data?: Record<string, unknown>) {
    this.log("WARN", category, message, data);
  }
}

export default Logger;