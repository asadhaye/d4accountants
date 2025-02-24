import { Inter } from "next/font/google";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://d4accountants.com"),
  title: {
    default: "D4 Accountants",
    template: "%s | D4 Accountants"
  },
  description: "Professional accounting services with AI-powered support",
  keywords: ["accountants", "tax", "bookkeeping", "manchester", "AI"],
  authors: [{ name: "D4 Accountants" }],
  creator: "D4 Accountants",
  publisher: "D4 Accountants",
  robots: {
    index: true,
    follow: true
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
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
