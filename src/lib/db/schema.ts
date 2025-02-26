import mongoose, { Schema } from "mongoose";
import type { MongooseLead, serviceInterestOptions } from "./models";

// Mongoose Schema
export interface ILead extends MongooseLead {}

const leadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  serviceInterest: { 
    type: String, 
    required: true,
    enum: serviceInterestOptions
  },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the model
export const Lead = mongoose.models.Lead || mongoose.model<ILead>("Lead", leadSchema);

// Removed unused exports:
// ChatMessage, chatMessageSchema, ChatMessageFormData
