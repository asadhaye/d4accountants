'use client';

import { motion } from "framer-motion";
import { ServiceLayout } from '@/components/shared/service-layout';
import { LeadCaptureForm } from '@/components/features/lead-capture';
import { Logger } from "@/lib/logger";
import { fadeIn } from "@/lib/animations";

export default function TaxPlanningPage() {
  Logger.info("analytics", "Tax Planning page viewed");
  return (
    <ServiceLayout
      title="Tax Planning Services"
      description="Strategic tax planning to minimize your tax liability while ensuring full compliance with tax regulations."
      imageSrc="/images/tax-planning.jpg"
    >
      <div className="space-y-12">
        <section className="mb-12">
          <p className="text-xl text-muted-foreground">
            Our tax planning services help you optimize your tax position while maintaining full compliance with all relevant regulations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              variants={fadeIn}
              className="p-8 rounded-xl border bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 border-blue-500/10 hover:border-teal-500/20">
              <h3 className="text-xl font-semibold mb-3">Personal Tax Planning</h3>
              <p className="text-muted-foreground">Optimize your personal tax position with strategic planning and expert guidance.</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="p-8 rounded-xl border bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 border-blue-500/10 hover:border-teal-500/20">
              <h3 className="text-xl font-semibold mb-3">Corporate Strategy</h3>
              <p className="text-muted-foreground">Comprehensive tax strategies tailored for your business's unique needs.</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="p-8 rounded-xl border bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 border-blue-500/10 hover:border-teal-500/20">
              <h3 className="text-xl font-semibold mb-3">Compliance & Review</h3>
              <p className="text-muted-foreground">Ensure full compliance while maximizing tax efficiency through regular reviews.</p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Get Started with Tax Planning</h2>
          <LeadCaptureForm service="tax-planning" />
        </section>
      </div>
    </ServiceLayout>
  );
}
