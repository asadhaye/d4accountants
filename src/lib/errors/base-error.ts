export class BaseError extends Error {
  public readonly category: string;
  public readonly status: number;

  constructor(message: string, category: string, status = 500) {
    super(message);
    this.name = this.constructor.name;
    this.category = category;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}