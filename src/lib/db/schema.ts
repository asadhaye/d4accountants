import { Schema, model, models, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message?: string;
  createdAt: Date;
}

const leadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  serviceInterest: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Lead = models.Lead || model<ILead>("Lead", leadSchema);
