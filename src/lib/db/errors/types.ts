import type { ErrorSeverity } from '@/lib/errors/types';

export interface DatabaseErrorOptions {
  operation: string;
  collection?: string;
  severity?: ErrorSeverity;
  details?: Record<string, unknown>;
}

export class DatabaseError extends Error {
  public readonly operation: string;
  public readonly collection?: string;
  public readonly severity: ErrorSeverity;

  constructor(message: string, options: DatabaseErrorOptions) {
    super(message);
    this.name = 'DatabaseError';
    this.operation = options.operation;
    this.collection = options.collection;
    this.severity = options.severity || 'error';
  }
}