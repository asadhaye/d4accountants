import { type LogCategory } from './types';

export { type LogCategory, type LogLevel } from './types';

export class Logger {
  static info(category: LogCategory, message: string, meta?: object): void {
    console.info(`[${category}] ${message}`, meta);
  }

  static warn(category: LogCategory, message: string, meta?: object): void {
    console.warn(`[${category}] ${message}`, meta);
  }

  static error(category: LogCategory, message: string, meta?: object): void {
    console.error(`[${category}] ${message}`, meta);
  }
}