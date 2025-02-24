import { MongoClient, Db, Collection, WithId, Document, InsertOneResult, UpdateResult, DeleteResult, FindCursor, ObjectId } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const options = {};

type DatabaseClient = MongoClient;

declare global {
  const _mongoClientPromise: Promise<DatabaseClient> | undefined;
}

class MockMongoClient extends MongoClient {
  constructor() {
    super(MONGODB_URI || 'mongodb://mock');
  }

  override async connect(): Promise<this> {
    return this;
  }

  override db(): Db {
    const mockCollection: Partial<Collection> = {
      findOne: async () => null,
      find: () => {
        const cursor = {
          toArray: async () => [] as Document[],
          clone: () => cursor as FindCursor<WithId<Document>>,
          map: () => cursor as FindCursor<WithId<Document>>,
          count: async () => 0,
          explain: async () => ({}),
          filter: () => cursor as FindCursor<WithId<Document>>,
          hint: () => cursor as FindCursor<WithId<Document>>,
          min: () => cursor as FindCursor<WithId<Document>>,
          max: () => cursor as FindCursor<WithId<Document>>,
          // Add other required FindCursor methods
        } as unknown as FindCursor<WithId<Document>>;
        return cursor;
      },
      insertOne: async () => ({ 
        acknowledged: true,
        insertedId: new ObjectId()
      }) as InsertOneResult<Document>,
      updateOne: async () => ({ 
        acknowledged: true,
        matchedCount: 1,
        modifiedCount: 1,
        upsertedCount: 0,
        upsertedId: null 
      }) as UpdateResult,
      deleteOne: async () => ({ 
        acknowledged: true,
        deletedCount: 1 
      }) as DeleteResult,
    };

    const mockDb: Partial<Db> = {
      collection: <TSchema extends Document = Document>() => 
        mockCollection as unknown as Collection<TSchema>
    };

    return mockDb as Db;
  }
}

let clientPromise: Promise<DatabaseClient>;

const createMockClient = (): Promise<DatabaseClient> => {
  console.warn('Using mock MongoDB client');
  return Promise.resolve(new MockMongoClient());
};

const createRealClient = (): Promise<DatabaseClient> => {
  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }
  return new MongoClient(MONGODB_URI, options).connect();
};

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<DatabaseClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    try {
      globalWithMongo._mongoClientPromise = createRealClient();
    } catch (err) {
      console.warn('Failed to connect to MongoDB:', err);
      globalWithMongo._mongoClientPromise = createMockClient();
    }
  }
  
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  try {
    clientPromise = createRealClient();
  } catch (err) {
    if (process.env.NODE_ENV === 'test') {
      console.warn('MongoDB connection failed:', err);
      clientPromise = createMockClient();
    } else {
      throw err;
    }
  }
}

export default clientPromise;
