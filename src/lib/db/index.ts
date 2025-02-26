import mongoose from 'mongoose';
import { DB_CONFIG } from '../config';

// Export only what's actually used
export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  if (!DB_CONFIG.uri) {
    throw new Error('MongoDB URI is not defined');
  }
  
  return mongoose.connect(DB_CONFIG.uri);
}

export function disconnectFromDatabase() {
  return mongoose.disconnect();
}

// Removed unused exports:
// initDatabase, getDatabase, getCollection, mongooseConnection, mongoClient
