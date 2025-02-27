import type { Metadata, Viewport } from 'next'

export const createPageMetadata = (
  title: string,
  description: string,
  path: string
): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: `https://d4accountants.com${path}`,
    siteName: 'D4 Accountants',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
})

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
}