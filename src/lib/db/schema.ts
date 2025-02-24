import { Schema, model, models, Document } from "mongoose";
import { z } from "zod";
import type { BaseLead } from "./models";

// Mongoose Schema
export interface ILead extends BaseLead, Document {}

const leadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  serviceInterest: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Lead = models.Lead || model<ILead>("Lead", leadSchema);

// Zod Validation Schemas
export const leadValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  serviceInterest: z.enum(["tax-planning", "bookkeeping", "financial-advisory"] as const),
  message: z.string().min(10, "Message must be at least 10 characters").optional(),
});

export type LeadFormData = z.infer<typeof leadValidationSchema>;

// Chat Message Schema
export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1),
  sessionId: z.string().uuid(),
});
