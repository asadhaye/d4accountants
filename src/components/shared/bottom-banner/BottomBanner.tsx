'use client';

import React from 'react';
import { useBannerState } from '@/hooks/use-banner-state';

interface BottomBannerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export function BottomBanner({ children, id, className = '' }: BottomBannerProps) {
  const { isVisible, hide: hideBanner } = useBannerState(id);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/10 backdrop-blur-lg border-t border-white/20 ${className}`}>
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">{children}</div>
        <button
          onClick={hideBanner}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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