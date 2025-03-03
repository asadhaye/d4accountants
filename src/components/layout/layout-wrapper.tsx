'use client';

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { CookieConsent } from "@/components/features/cookie-consent/index";
import { PWAInstaller } from "@/components/features/pwa/index";
import { ChatBot } from "@/components/features";
import { PartnerLogos } from "./partner-logos";
import { BackgroundWrapper } from '@/components/shared/background-wrapper';

export function LayoutWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundWrapper>
      <div className="flex min-h-screen flex-col">
        <PWAInstaller />
        <Header />
        <main className="flex-1">{children}</main>
        <PartnerLogos />
        <Footer />
        <ChatBot />
        <Toaster />
        <CookieConsent />
      </div>
    </BackgroundWrapper>
  );
}
