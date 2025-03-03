import mongoose from 'mongoose';
import { mockMongoClient, mockDbConnection } from './mocks/db';
import { ConnectionManager } from '../db/connection-manager';

export async function setupTestDatabase() {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('setupTestDatabase should only be called in test environment');
  }
  
  global.__mongoConnections = Promise.resolve(mockDbConnection);
  
  return mockDbConnection;
}

export async function teardownTestDatabase() {
  if (process.env.NODE_ENV !== 'test') return;
  
  const connectionManager = ConnectionManager.getInstance();
  await connectionManager.disconnect();
  delete global.__mongoConnections;
}