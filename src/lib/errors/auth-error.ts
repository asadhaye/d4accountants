import { BaseError } from './base-error';

export class AuthenticationError extends BaseError {
  constructor(message: string) {
    super(message, 'authentication', 401);
  }
}

export class AuthorizationError extends BaseError {
  constructor(message: string) {
    super(message, 'authorization', 403);
  }
}