'use client';

import ServiceLayout from '@/components/shared/service-layout';
import { motion } from "framer-motion";
import { LeadCaptureForm } from "@/components/features/lead-capture/index";
import { Logger } from "@/lib/logger";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

export interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  ctaText: string;
}

export default function ServicePage({
  title,
  description,
  benefits,
  processSteps,
  ctaText
}: ServicePageProps) {
  const logServiceView = () => {
    Logger.event({
      action: 'view_service_page',
      category: 'engagement',
      label: title,
    });
  };

  return (
    <ServiceLayout>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 py-12"
        onViewportEnter={logServiceView}
      >
        <motion.section variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            {description}
          </p>
        </motion.section>

        <motion.section variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Process</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {ctaText}
          </h2>
          <LeadCaptureForm serviceInterest={title.split(' ')[0].toLowerCase()} />
        </motion.section>
      </motion.div>
    </ServiceLayout>
  );
}