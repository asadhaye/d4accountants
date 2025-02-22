"use client";

import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Logger } from "@/lib/logger";

export default function FinancialAdvisoryPage() {
  Logger.info("page-view", "Financial Advisory page viewed");

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Financial Advisory Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Expert financial guidance to help you make informed decisions and
          achieve your financial goals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
            <ul className="space-y-2">
              <li> • Financial goal setting</li>
              <li> • Investment strategy development</li>
              <li> • Risk management planning</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
            <ul className="space-y-2">
              <li> • Business valuation</li>
              <li> • Merger and acquisition advice</li>
              <li> • Growth strategy consulting</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-3">Wealth Management</h3>
            <ul className="space-y-2">
              <li> • Portfolio management</li>
              <li> • Retirement planning</li>
              <li> • Estate planning strategies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Get Started with Financial Advisory
        </h2>
        <LeadCaptureForm service="financial-advisory" />
      </section>
    </div>
  );
}