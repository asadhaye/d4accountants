import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'D4 Accountants',
  description: 'Professional accounting services with AI-powered support',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
