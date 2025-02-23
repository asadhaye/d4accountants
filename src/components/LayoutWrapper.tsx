'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";
import PWAInstaller from "@/components/PWAInstaller";

export default function LayoutWrapper({
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