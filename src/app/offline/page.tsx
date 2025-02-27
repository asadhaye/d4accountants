'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export default function OfflinePage() {
  return (
    <AnimatedSection className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">You&apos;re Offline</h1>
          <p className="text-muted-foreground">
            {`You're currently offline.`}
            {`We'll get you back online as soon as possible.`}
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
