'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/animated-section';

// Move metadata and viewport to a separate metadata.ts file since they can't be used in client components
export default function NotFound() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you are looking for could not be found.
          </p>
          <Link href="/">
            <Button variant="default" className="mt-4">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
