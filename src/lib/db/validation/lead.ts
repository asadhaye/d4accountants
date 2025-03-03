import { z } from 'zod';
import { serviceInterestOptions } from '../constants';

export const leadValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceInterest: z.enum(serviceInterestOptions),
  message: z.string().optional()
});

export type LeadFormData = z.infer<typeof leadValidationSchema>;