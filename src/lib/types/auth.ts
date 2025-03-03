export interface CustomUser {
  id: string;
  email: string;
  name: string;
}

export interface CustomToken {
  id?: string;
  [key: string]: unknown;
}