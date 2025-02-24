// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Hero, ServiceCards } from "@/components/sections";
import { LeadCaptureForm } from "@/components/features/lead-capture/index";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceCards />
      <LeadCaptureForm />
    </main>
  );
}
