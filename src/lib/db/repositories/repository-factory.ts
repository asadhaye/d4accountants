import { LeadRepository } from './lead-repository';
import { ConnectionManager } from '../connection-manager';

export class RepositoryFactory {
  private static instance: RepositoryFactory;
  private leadRepository: LeadRepository | null = null;

  private constructor() {}

  static getInstance(): RepositoryFactory {
    if (!RepositoryFactory.instance) {
      RepositoryFactory.instance = new RepositoryFactory();
    }
    return RepositoryFactory.instance;
  }

  async initialize(): Promise<void> {
    await ConnectionManager.getInstance().connect();
  }

  getLeadRepository(): LeadRepository {
    if (!this.leadRepository) {
      this.leadRepository = new LeadRepository();
    }
    return this.leadRepository;
  }
}