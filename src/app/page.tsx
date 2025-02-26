// src/app/page.tsx
"use client";

import { Hero } from '@/components/sections/hero';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Solutions } from '@/components/sections/solutions/Solutions';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Solutions />
    </main>
  );
}
