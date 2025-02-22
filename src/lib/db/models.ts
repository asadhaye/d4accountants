import { ObjectId } from "mongodb";

export interface Lead {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message?: string;
  createdAt: Date;
}

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
