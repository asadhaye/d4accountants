'use client';

import { ServiceLayout } from '@/components/shared/service-layout';
import { motion } from "framer-motion";
import { LeadCaptureForm } from "@/components/features/lead-capture/index";
import { Logger } from "@/lib/logger/logger";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";
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
  imageSrc?: string;
}

export function ServicePage({
  title,
  description,
  benefits,
  processSteps,
  ctaText,
  imageSrc = "/images/default-service.jpg"
}: ServicePageProps) {
  const logServiceView = () => {
    Logger.info("engagement", "view_service_page", {
      label: title,
    });
  };

  return (
    <ServiceLayout
      title={title}
      description={description}
      imageSrc={imageSrc}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 py-12 bg-gradient-to-br from-blue-950/50 via-teal-950/50 to-blue-950/50"
        onViewportEnter={logServiceView}
      >
        <motion.section variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-6">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            {description}
          </p>
        </motion.section>

        <motion.section variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-white/5 backdrop-blur-xl rounded-lg shadow-md border border-blue-500/10 hover:border-teal-500/20 transition-all duration-300">
                <CheckCircle className="text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">Our Process</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="space-y-4 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-blue-500/10 hover:border-teal-500/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-teal-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
            {ctaText}
          </h2>
          <LeadCaptureForm 
            service={
              title.toLowerCase().includes('tax') ? 'tax-planning' : 
              title.toLowerCase().includes('book') ? 'bookkeeping' : 
              'financial-advisory'
            } 
          />
        </motion.section>
      </motion.div>
    </ServiceLayout>
  );
}
