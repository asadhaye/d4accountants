import mongoose from 'mongoose';
import type { BaseDocument } from '../types/mongoose';
import { leadValidationSchema } from '../validation/lead';
import type { LeadInput } from '../types/lead';

export interface ILead extends BaseDocument, LeadInput {}

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceInterest: { type: String, required: true },
  message: { type: String },
}, {
  timestamps: true
});

export const Lead = mongoose.models.Lead || mongoose.model<ILead>('Lead', leadSchema);