"use client";

import { motion } from "framer-motion";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Logger } from "@/lib/logger";
import { fadeIn } from "@/lib/animations";

export default function BookkeepingPage() {
  Logger.info("page-view", "Bookkeeping page viewed");

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Bookkeeping Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional bookkeeping services to maintain accurate financial
          records and ensure compliance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Financial Records</h3>
            <ul className="space-y-2">
              <li> • Accurate transaction recording</li>
              <li> • Bank reconciliation</li>
              <li> • Financial statement preparation</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Compliance</h3>
            <ul className="space-y-2">
              <li> • VAT returns and submissions</li>
              <li> • Payroll management</li>
              <li> • Regulatory compliance</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Business Insights</h3>
            <ul className="space-y-2">
              <li> • Monthly financial reports</li>
              <li> • Cash flow tracking</li>
              <li> • Performance metrics</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Get Started with Bookkeeping
        </h2>
        <LeadCaptureForm service="bookkeeping" />
      </section>
    </div>
  );
}