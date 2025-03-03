import type { Document } from 'mongoose';
import { MongoRepository } from './base-repository';
import { Lead } from '../models/lead';
import type { LeadFormData } from '../validation/lead';

export interface LeadDocument extends Document, LeadFormData {}

export class LeadRepository extends MongoRepository<LeadDocument> {
  constructor() {
    super(Lead);
  }

  async findByEmail(email: string): Promise<LeadDocument | null> {
    return this.findOne({ email });
  }

  async findByServiceInterest(service: string): Promise<LeadDocument[]> {
    return this.findMany({ serviceInterest: service });
  }
}