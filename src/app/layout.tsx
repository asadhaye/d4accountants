import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { default as Header } from "@/components/Header";
import { default as Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "D4 Accountants - Professional Accounting Services",
  description:
    "Expert accounting services for businesses and individuals, including tax planning, bookkeeping, and financial advisory.",
  keywords:
    "accountants, tax services, bookkeeping, financial advisory, business accounting",
  authors: [{ name: "D4 Accountants" }],
  robots: "index, follow",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "D4 Accountants",
    startupImage: [
      {
        url: "/icon-192x192.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icon-512x512.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    title: "D4 Accountants - Professional Accounting Services",
    description:
      "Expert accounting services for businesses and individuals, specializing in tax planning, bookkeeping, and financial advisory.",
    siteName: "D4 Accountants",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "D4 Accountants Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D4 Accountants",
    description:
      "Expert accounting services for businesses and individuals, specializing in tax planning, bookkeeping, and financial advisory.",
    images: ["/icon-512x512.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} min-h-screen bg-background antialiased`}
      >
        <main className="relative flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
