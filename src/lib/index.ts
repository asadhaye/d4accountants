// Authentication
export { authOptions } from './auth/config';
export { getCurrentUser, isAuthenticated } from './auth/utils';
export type { CustomUser, CustomToken, AuthError } from './auth/types';

// Database
export * from './db';
export { connectToDatabase, disconnectFromDatabase } from './db/connection-manager';
export * from './db/models';

// Utilities
export { cn } from './utils';
export { Logger } from './logger/logger';
export type { LogLevel, LogCategory, LogEntry, LoggerOptions } from './logger/types';
export { handleError } from './errors';

// PWA
export { initPWAInstall } from './pwa';
export type { BeforeInstallPromptEvent } from './types/pwa';

// Metadata
export { generateMetadata, generatePageMetadata } from './metadata';

// Config
export * from './config';