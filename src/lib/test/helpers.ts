import { type NextRequest } from 'next/server';

export function createMockRequest(data: unknown, method = 'POST'): NextRequest {
  return new NextRequest(`http://localhost:3000/api/test`, {
    method,
    body: JSON.stringify(data),
  });
}

export function createMockAuthSession(user = mockUser) {
  return {
    user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
}