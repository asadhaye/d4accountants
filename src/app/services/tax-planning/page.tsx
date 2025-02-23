"use client";

import { motion } from "framer-motion";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Logger } from "@/lib/logger";
import { fadeIn } from "@/lib/animations";

export default function TaxPlanningPage() {
  Logger.info("page-view", "Tax Planning page viewed");

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Tax Planning Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Strategic tax planning to minimize your tax liability and maximize
          your financial efficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Tax Optimization</h3>
            <ul className="space-y-2">
              <li> • Comprehensive tax strategy development</li>
              <li> • Identification of tax-saving opportunities</li>
              <li> • Regular tax law updates and compliance</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Business Planning</h3>
            <ul className="space-y-2">
              <li> • Business structure optimization</li>
              <li> • Investment and expansion strategies</li>
              <li> • Cash flow management</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Personal Tax</h3>
            <ul className="space-y-2">
              <li> • Individual tax return preparation</li>
              <li> • Estate and inheritance planning</li>
              <li> • Retirement tax strategies</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Get Started with Tax Planning
        </h2>
        <LeadCaptureForm service="tax-planning" />
      </section>
    </div>
  );
}