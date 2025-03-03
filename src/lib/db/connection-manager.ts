import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import { DatabaseError } from './errors/types';

export class ConnectionManager {
  private static instance: ConnectionManager;
  private mongooseConnection: Promise<typeof mongoose> | null = null;
  private mongoClient: Promise<MongoClient> | null = null;

  private constructor() {}

  static getInstance(): ConnectionManager {
    if (!ConnectionManager.instance) {
      ConnectionManager.instance = new ConnectionManager();
    }
    return ConnectionManager.instance;
  }

  async connect(): Promise<void> {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new DatabaseError('MongoDB URI not found', {
        operation: 'connect',
        severity: 'error'
      });
    }

    try {
      this.mongooseConnection = mongoose.connect(uri);
      this.mongoClient = new MongoClient(uri).connect();

      // Setup connection event handlers
      mongoose.connection.on('error', this.handleConnectionError);
      mongoose.connection.on('disconnected', this.handleDisconnect);

      await Promise.all([this.mongooseConnection, this.mongoClient]);
    } catch (error) {
      throw new DatabaseError('Failed to connect to database', {
        operation: 'connect',
        details: { error }
      });
    }
  }

  private handleConnectionError(error: Error): void {
    console.error('MongoDB connection error:', error);
  }

  private handleDisconnect(): void {
    console.warn('MongoDB disconnected. Attempting to reconnect...');
  }

  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      await (await this.mongoClient)?.close();
    } catch (error) {
      throw new DatabaseError('Failed to disconnect from database', {
        operation: 'disconnect',
        details: { error }
      });
    }
  }
}