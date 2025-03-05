import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ErrorBoundary } from "@/components/shared";
import "./globals.css";
import "@/styles/theme.css";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { AnimatedBackground } from "@/components/shared/animations";

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata = {
  metadataBase: new URL("https://d4accountants.com"),
  title: {
    default: "D4 Accountants",
    template: "%s | D4 Accountants"
  },
  description: "Professional accounting services with AI-powered support for businesses in Manchester and beyond",
  keywords: ["accountants", "tax planning", "bookkeeping", "manchester", "AI accounting", "financial advisory"],
  authors: [{ name: "D4 Accountants", url: "https://d4accountants.com" }],
  creator: "D4 Accountants",
  publisher: "D4 Accountants",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://d4accountants.com",
    siteName: "D4 Accountants",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "D4 Accountants"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@d4accountants",
    creator: "@d4accountants"
  }
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2E4A8B" },
    { media: "(prefers-color-scheme: dark)", color: "#2E4A8B" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="theme-color" content="#2E4A8B" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="min-h-screen flex flex-col relative">
        <AnimatedBackground>
          <ErrorBoundary>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </ErrorBoundary>
        </AnimatedBackground>
      </body>
    </html>
  );
}
