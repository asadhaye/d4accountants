'use client';

import ServiceLayout from '@/components/shared/service-layout';

export default function FinancialAdvisoryPage() {
  return (
    <ServiceLayout
      title="Financial Advisory Services"
      description="Strategic financial planning and advisory services to help you achieve your financial goals."
      imageSrc="/images/financial-advisory.jpg"
    >
      <div className="space-y-6">
        <p className="text-lg">
          Our financial advisory services provide comprehensive guidance to help you make informed decisions about your financial future.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Strategic financial planning</li>
          <li>Investment advisory services</li>
          <li>Retirement planning</li>
          <li>Risk management solutions</li>
          <li>Wealth preservation strategies</li>
        </ul>
      </div>
    </ServiceLayout>
  );
}
