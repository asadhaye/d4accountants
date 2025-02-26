import { z } from "zod";

// Service interest options
export const serviceInterestOptions = [
  "tax-planning",
  "bookkeeping",
  "financial-advisory",
  "general-inquiry"
] as const;

// Lead schema for validation
export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceInterest: z.enum(serviceInterestOptions),
  message: z.string().optional(),
});

// Lead type
export type Lead = z.infer<typeof leadSchema>;
export type ServiceInterest = typeof serviceInterestOptions[number];

// Mongoose Lead type
export interface MongooseLead extends Lead {
  createdAt: Date;
}

// Removed unused exports:
// MongoDBLead, ChatMessage, MongoDBChatMessage, collections
