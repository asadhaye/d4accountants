import { mockDbConnection } from './mocks/db';
import { ConnectionManager } from '../db/connection-manager';
import type { GlobalMongoose } from '../db/connect';

export async function setupTestDatabase() {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('setupTestDatabase should only be called in test environment');
  }
  
  global.__mongoConnections = Promise.resolve(mockDbConnection);
  return mockDbConnection;
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoConnections: Promise<GlobalMongoose> | undefined;
}

export async function teardownTestDatabase() {
  if (process.env.NODE_ENV !== 'test') return;
  
  const connectionManager = ConnectionManager.getInstance();
  await connectionManager.disconnect();
  if (global.__mongoConnections) {
    delete (global as { __mongoConnections?: Promise<GlobalMongoose> }).__mongoConnections;
  }
}