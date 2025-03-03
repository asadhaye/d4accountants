"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/animations";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your needs and goals to create a tailored plan.",
  },
  {
    number: "02",
    title: "Financial Analysis",
    description: "Thorough review of your financial situation and requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute the agreed strategy with regular updates.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring and adjustments as needed.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple and effective steps to help you succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeIn}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}