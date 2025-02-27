'use client';

import { ServicePage } from '@/components/shared/service-page';

export default function TaxPlanningPage() {
  return (
    <ServicePage
      title="Tax Planning Services"
      description="Our tax planning services help businesses and individuals minimize tax liabilities while ensuring compliance with all relevant tax laws and regulations."
      benefits={[
        "Minimize tax liabilities through strategic planning and implementation",
        "Stay compliant with changing tax laws and regulations",
        "Identify and leverage available tax credits and deductions",
        "Develop tax-efficient business structures and operations",
        "Receive year-round tax advice, not just during tax season",
        "Prepare for major financial events with tax-optimized strategies"
      ]}
      processSteps={[
        {
          title: "Initial Assessment",
          description: "We begin with a comprehensive review of your financial situation, tax history, and future goals to identify opportunities for tax optimization."
        },
        {
          title: "Strategy Development",
          description: "Based on our assessment, we develop a customized tax planning strategy tailored to your specific needs and objectives."
        },
        {
          title: "Implementation",
          description: "We work with you to implement the recommended strategies, making adjustments as needed to ensure optimal results."
        },
        {
          title: "Ongoing Monitoring",
          description: "Tax laws and your financial situation change over time. We continuously monitor these changes and update your tax planning strategy accordingly."
        }
      ]}
      ctaText="Get Started with Tax Planning"
    />
  );
}
