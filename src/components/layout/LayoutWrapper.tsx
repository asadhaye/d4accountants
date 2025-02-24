'use client';

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/features/cookie-consent/index";
import { PWAInstaller } from "@/components/features/pwa/index";

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
      <Footer />
      <Toaster />
      <CookieConsent />
    </>
  );
}
