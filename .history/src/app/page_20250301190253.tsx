"use client";

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Solutions } from '@/components/sections/solutions/Solutions';
import { Partners } from '@/components/sections/partners';
import { Testimonials } from '@/components/sections/testimonials';
import { LeadCaptureForm } from '@/components/features/lead-capture';
import { ServicePage } from '@/components/shared/service-page'; // Import ServicePage
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
    <main className="flex-1">
      <Hero />
      <Services />
      <Solutions />
      <Partners />
      <Testimonials />
      <WhyChooseUs />
      <LeadCaptureForm />
      <ServicePage // Add ServicePage component
        title="Our Services"
        description="Explore our range of services designed to help you succeed."
        benefits={[
          "Expert financial advice",
          "Comprehensive tax planning",
          "Accurate bookkeeping",
        ]}
        processSteps={[
          { title: "Consultation", description: "Discuss your needs and goals." },
          { title: "Planning", description: "Develop a tailored strategy." },
          { title: "Implementation", description: "Execute the plan effectively." },
        ]}
        ctaText="Get Started"
      />
    </main>
  );
}