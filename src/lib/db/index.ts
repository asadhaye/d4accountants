import { ConnectionManager } from './connection-manager';

// Export a singleton instance for database operations
export async function connectToDatabase() {
  const connectionManager = ConnectionManager.getInstance();
  await connectionManager.connect();
}

export async function disconnectFromDatabase() {
  const connectionManager = ConnectionManager.getInstance();
  await connectionManager.disconnect();
}

// Export ConnectionManager for advanced use cases
export { ConnectionManager };
