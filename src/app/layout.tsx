// src/app/layout.tsx
import { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/service-worker-register";  // Updated import path

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://d4accountants.com'),
  title: {
    default: "D4 Accountants | Professional Accounting Services",
    template: "%s | D4 Accountants"
  },
  description: "Professional accounting services including tax planning, bookkeeping, and financial advisory for businesses in the UK.",
  keywords: ["accounting", "tax planning", "bookkeeping", "financial advisory", "UK accountants"],
  authors: [{ name: "D4 Accountants" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://d4accountants.com",
    siteName: "D4 Accountants",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "D4 Accountants - Professional Accounting Services"
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/twitter-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
  verification: {
    google: "your-google-site-verification",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "D4 Accountants",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}