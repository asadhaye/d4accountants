/**
 * Centralized configuration management
 * All environment variables and configuration settings should be accessed through this module
 */

// Database configuration
export const DB_CONFIG = {
  uri: process.env.MONGODB_URI,
  name: process.env.MONGODB_DB_NAME || 'd4accountants',
  collections: {
    leads: 'leads',
    chatMessages: 'chatMessages',
  },
};

// Environment flags
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_TEST = process.env.NODE_ENV === 'test';

// Remove unused configurations or mark them for future use
/*
// API configuration
export const API_CONFIG = {
  rateLimits: {
    chat: 50, // requests per hour
    leadForm: 10, // submissions per hour
  },
  timeouts: {
    chat: 30000, // 30 seconds
  },
};

// Auth configuration
export const AUTH_CONFIG = {
  providers: ['google', 'credentials'],
  sessionMaxAge: 30 * 24 * 60 * 60, // 30 days
};

// Feature flags
export const FEATURES = {
  enableChat: true,
  enablePWA: true,
};
*/
