import { MongoClient } from "mongodb";
import mongoose from "mongoose";

export const mockMongoClient = new MongoClient('mongodb://mock');

export const mockDbConnection = {
  mongoose: Promise.resolve(mongoose),
  mongoClient: Promise.resolve(mockMongoClient),
};

export const mockLead = {
  _id: "test-id",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  serviceInterest: "tax-planning",
  message: "Test message",
  createdAt: new Date(),
};