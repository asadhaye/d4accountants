'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      console.error('Authentication error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error === 'Configuration' && 'There is a problem with the server configuration.'}
            {error === 'AccessDenied' && 'Access denied. You do not have permission to sign in.'}
            {error === 'Verification' && 'The sign in link is no longer valid.'}
            {error === 'Default' && 'Unable to sign in.'}
            {!error && 'An unknown error occurred.'}
          </p>
          <div className="mt-4 text-center">
            <a
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Try again
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}