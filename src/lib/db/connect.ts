import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
let clientPromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === "development") {
  const globalWithMongoose = global as typeof globalThis & {
    mongoose: Promise<typeof mongoose>;
  };

  if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = connectToDatabase();
  }
  clientPromise = globalWithMongoose.mongoose;
} else {
  clientPromise = connectToDatabase();
}

async function connectToDatabase(): Promise<typeof mongoose> {
  try {
    await mongoose.connect(uri);
    process.on("SIGINT", async () => {
      try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed through app termination");
        process.exit(0);
      } catch (err) {
        console.error("Error closing MongoDB connection:", err);
        process.exit(1);
      }
    });
    return mongoose;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export { clientPromise };