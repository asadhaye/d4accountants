"use client";

import { 
  Hero,
  Services,
  WhyChooseUs,
  Solutions,
  Partners,
  CTASection,
  Testimonials,
  Stats,
  Process 
} from '@/components/sections';
import { AnimatedSection } from '@/components/shared/animations/animated-section';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <Process />
      <WhyChooseUs />
      <Solutions />
      <Testimonials />
      <Partners />
      <CTASection />
    </main>
  );
}