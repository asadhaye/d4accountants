'use client';

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/features/cookie-consent/index";
import { PWAInstaller } from "@/components/features/pwa/index";
import { ChatBot } from "@/components/features";
import { PartnerLogos } from "./partner-logos";

export function LayoutWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PWAInstaller />
      <Header />
      <main className="flex-1">{children}</main>
      <PartnerLogos />
      <Footer />
      <ChatBot />
      <Toaster />
      <CookieConsent />
    </>
  );
}
