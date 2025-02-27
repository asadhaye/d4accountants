'use client';

import { motion } from 'framer-motion';
import { LeadCaptureForm } from '@/components/features/lead-capture';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { CheckCircle } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  ctaText?: string;
}

export function ServicePage({
  title,
  description,
  benefits,
  processSteps,
  ctaText = 'Get Started',
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600 mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
              Key Benefits
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-800/40 backdrop-blur-xl rounded-xl p-6 border border-amber-400/10 hover:border-amber-400/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600">
              Our Process
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative bg-gray-800/40 backdrop-blur-xl rounded-xl p-6 border border-amber-400/10"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Lead Capture Form */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-xl"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-600 mb-4">
              {ctaText}
            </h2>
            <p className="text-lg text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
          <motion.div variants={fadeIn}>
            <LeadCaptureForm />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}