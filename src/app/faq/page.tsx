import { createPageMetadata } from '@/lib/metadata';
import { FAQContent } from '@/components/pages/faq/faq-content';

export const metadata = createPageMetadata(
  'FAQ - D4 Accountants',
  'Frequently asked questions about D4 Accountants services, pricing, and processes.',
  '/faq'
);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <FAQContent />
      </div>
    </div>
  );
}
