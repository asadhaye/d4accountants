'use client';

import { ServicePage } from '@/components/shared/service-page/service-page';

export default function FinancialAdvisoryPage() {
  return (
    <ServicePage
      title="Financial Advisory Services"
      description="Our financial advisory services provide comprehensive guidance to help businesses and individuals achieve their financial goals through strategic planning and informed decision-making."
      benefits={[
        "Develop a clear roadmap to achieve your financial goals",
        "Make informed decisions based on expert financial analysis",
        "Optimize your investment portfolio for better returns",
        "Prepare for major life events with proper financial planning",
        "Reduce financial stress through organized planning",
        "Access ongoing support from experienced financial advisors"
      ]}
      processSteps={[
        {
          title: "Financial Assessment",
          description: "We begin with a thorough evaluation of your current financial situation, including assets, liabilities, income, and expenses."
        },
        {
          title: "Strategy Development",
          description: "Based on our assessment, we develop a customized financial strategy tailored to your specific needs and objectives."
        },
        {
          title: "Implementation",
          description: "We assist you in implementing the recommended strategies, making adjustments as needed to ensure optimal results."
        },
        {
          title: "Ongoing Monitoring",
          description: "Financial markets and your personal situation change over time. We continuously monitor these changes and update your financial strategy accordingly."
        }
      ]}
      ctaText="Get Started with Financial Advisory"
    />
  );
}
