'use client';

import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">You&apos;re Offline</h1>
          <p className="text-muted-foreground">
            Please check your internet connection and try again.
          </p>
          <Button onClick={handleRetry} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
