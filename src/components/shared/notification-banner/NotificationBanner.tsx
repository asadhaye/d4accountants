'use client';

import React from 'react';
import { useBannerState } from '@/hooks/use-banner-state';

interface NotificationBannerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export function NotificationBanner({ 
  children, 
  id, 
  className = '',
  type = 'info' 
}: NotificationBannerProps) {
  const { isVisible, hide: hideBanner } = useBannerState(id);

  if (!isVisible) return null;

  const typeStyles = {
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-200',
    success: 'bg-green-500/10 border-green-500/20 text-green-200',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-200',
    error: 'bg-red-500/10 border-red-500/20 text-red-200'
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md p-4 rounded-lg backdrop-blur-lg border ${typeStyles[type]} ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">{children}</div>
        <button
          onClick={hideBanner}
          className="text-current opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Close notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}