'use client';

import ServiceLayout from '@/components/shared/service-layout';

export default function TaxPlanningPage() {
  return (
    <ServiceLayout
      title="Tax Planning Services"
      description="Strategic tax planning to minimize your tax liability while ensuring full compliance with tax regulations."
      imageSrc="/images/tax-planning.jpg"
    >
      <div className="space-y-6">
        <p className="text-lg">
          Our tax planning services help you optimize your tax position while maintaining full compliance with all relevant regulations.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal tax planning</li>
          <li>Corporate tax strategy</li>
          <li>Tax efficiency review</li>
          <li>Compliance monitoring</li>
          <li>Tax return preparation</li>
        </ul>
      </div>
    </ServiceLayout>
  );
}
