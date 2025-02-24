import { ObjectId } from "mongodb";
import { Document } from "mongoose";

export interface BaseLead {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message?: string;
  createdAt: Date;
}

export interface MongoLead extends BaseLead {
  _id?: ObjectId;
}

export interface MongooseLead extends BaseLead, Document {}

export interface ChatMessage {
  _id?: ObjectId;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
  sessionId: string;
}

export const collections = {
  leads: "leads",
  chatMessages: "chatMessages",
} as const;

export type ServiceType = "tax-planning" | "bookkeeping" | "financial-advisory";
