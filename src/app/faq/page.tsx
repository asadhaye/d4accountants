import { createPageMetadata } from '@/lib/metadata';
import { FAQContent } from '@/app/faq/content';

export const metadata = createPageMetadata(
  'FAQ - D4 Accountants',
  'Frequently asked questions about D4 Accountants services, pricing, and processes.',
  '/faq'
);

export default function FAQPage() {
  return <FAQContent />;
}
