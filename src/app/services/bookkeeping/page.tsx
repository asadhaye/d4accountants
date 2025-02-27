'use client';

import { ServicePage } from '@/components/shared/service-page';

export default function BookkeepingPage() {
  return (
    <ServicePage
      title="Bookkeeping Services"
      description="Our professional bookkeeping services help businesses maintain accurate financial records, ensure compliance, and gain valuable insights into their financial performance."
      benefits={[
        "Maintain accurate and up-to-date financial records",
        "Save time and focus on growing your business",
        "Ensure compliance with accounting standards and regulations",
        "Gain insights into your business's financial health",
        "Make informed business decisions based on accurate data",
        "Simplify tax preparation with organized financial records"
      ]}
      processSteps={[
        {
          title: "Initial Setup",
          description: "We begin by setting up or reviewing your accounting system, chart of accounts, and financial processes to ensure they meet your business needs."
        },
        {
          title: "Regular Bookkeeping",
          description: "Our team handles all aspects of your bookkeeping, including recording transactions, reconciling accounts, and managing payables and receivables."
        },
        {
          title: "Financial Reporting",
          description: "We provide regular financial reports, including income statements, balance sheets, and cash flow statements, to help you understand your financial position."
        },
        {
          title: "Ongoing Support",
          description: "We offer continuous support to answer your questions, address concerns, and provide guidance on financial matters as they arise."
        }
      ]}
      ctaText="Get Started with Bookkeeping"
    />
  );
}
