// src/app/page.tsx
"use client";

import { Hero } from '@/components/sections/hero';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Solutions } from '@/components/sections/solutions/Solutions';
import { useEffect } from 'react';

export default function Home() {
  // Check for broken links on mount (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.getAttribute('href')?.startsWith('/') && 
            !link.getAttribute('href')?.includes('#')) {
          console.log(`Checking link: ${link.getAttribute('href')}`);
        }
      });
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Solutions />
      </div>
    </main>
  );
}
