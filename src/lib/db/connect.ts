import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

interface GlobalMongoose {
  mongoose: Promise<typeof mongoose>;
  mongoClient: Promise<MongoClient>;
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoConnections: Promise<GlobalMongoose> | undefined;
}

async function createConnections(): Promise<GlobalMongoose> {
  if (!MONGODB_URI) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      console.warn('MongoDB URI not found. Using mock connections for development/test.');
      return {
        mongoose: Promise.resolve(mongoose),
        mongoClient: Promise.resolve(new MongoClient('mongodb://mock')),
      };
    }
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  try {
    const mongooseConnection = mongoose.connect(MONGODB_URI);
    const mongoClient = new MongoClient(MONGODB_URI).connect();

    // Handle graceful shutdown
    process.on("SIGINT", async () => {
      try {
        await mongoose.connection.close();
        await (await mongoClient).close();
        console.log("Database connections closed through app termination");
        process.exit(0);
      } catch (err) {
        console.error("Error closing database connections:", err);
        process.exit(1);
      }
    });

    return {
      mongoose: mongooseConnection,
      mongoClient,
    };
  } catch (error) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      console.warn('Failed to connect to MongoDB. Using mock connections for development/test.');
      return {
        mongoose: Promise.resolve(mongoose),
        mongoClient: Promise.resolve(new MongoClient('mongodb://mock')),
      };
    }
    throw error;
  }
}

// Create and export connections based on environment
const connections: Promise<GlobalMongoose> = (() => {
  if (process.env.NODE_ENV === "development") {
    if (!global.__mongoConnections) {
      global.__mongoConnections = createConnections();
    }
    return global.__mongoConnections;
  }
  return createConnections();
})();

export { connections };
export const clientPromise = connections.then((conn: GlobalMongoose) => conn.mongoose);
export const mongoClient = connections.then((conn: GlobalMongoose) => conn.mongoClient);
