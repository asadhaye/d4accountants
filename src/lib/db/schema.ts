import mongoose, { Schema } from "mongoose";
import type { MongooseLead } from "./models";
import { serviceInterestOptions } from "./models";
import { z } from "zod";

// Mongoose Schema
export interface ILead extends MongooseLead {
  _id: string;
  createdAt: Date;
}  

// Lead form validation schema
export const leadValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  serviceInterest: z.enum([
    "tax-planning", 
    "bookkeeping", 
    "financial-advisory"
  ]).default("tax-planning"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// Type for the lead form data
export type LeadFormData = z.infer<typeof leadValidationSchema>;

// Schema for database input
export const leadSchemaZod = leadValidationSchema.extend({
  createdAt: z.date().optional()
});

// Type for database input
export type LeadInput = z.infer<typeof leadSchemaZod>;

// Mongoose schema definition
const leadMongooseSchema = new Schema<ILead>({
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
let Lead: mongoose.Model<ILead>;

try {
  // Check if model is already registered
  Lead = mongoose.models.Lead as mongoose.Model<ILead>;
} catch {
  // Register model if not already registered
  Lead = mongoose.model<ILead>("Lead", leadMongooseSchema);
}

export { Lead };

// Removed unused exports:
// ChatMessage, chatMessageSchema, ChatMessageFormData
