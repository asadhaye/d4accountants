import mongoose from 'mongoose';
import type { Document } from 'mongoose';
import type { LeadFormData } from '../validation/lead';

export interface ILead extends Document, LeadFormData {}

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  phone: { type: String, required: true },
  serviceInterest: { 
    type: String, 
    required: true,
    enum: ['tax-planning', 'financial-advisory', 'bookkeeping']
  },
  message: { type: String },
}, {
  timestamps: true
});

export const Lead = mongoose.models.Lead || mongoose.model<ILead>('Lead', leadSchema);