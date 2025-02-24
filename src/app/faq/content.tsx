'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What accounting services do you offer?",
    answer: "We provide comprehensive accounting services including tax planning, bookkeeping, financial advisory, and business consulting. Our team of experts can help with everything from day-to-day accounting to strategic financial planning."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy. Simply book a free consultation through our website or contact us directly. We'll discuss your needs and create a tailored solution that works for your business."
  },
  {
    question: "What are your fees and pricing structure?",
    answer: "Our fees vary depending on the services required and the complexity of your business. We offer transparent pricing and flexible payment plans. Contact us for a detailed quote tailored to your needs."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with businesses of all sizes, from startups to established companies. We tailor our services to meet the specific needs and budget of each client."
  },
  {
    question: "How often will I receive financial reports?",
    answer: "We provide regular financial reports based on your business needs and requirements. This can be monthly, quarterly, or annually, and we can customize the reporting schedule to suit your preferences."
  }
];

export function FAQContent() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto py-12 px-4"
    >
      <motion.h1 
        variants={slideUp}
        className="text-4xl font-bold text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div 
        variants={slideUp}
        className="space-y-4"
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full px-6 py-4 text-left flex justify-between items-center",
                openQuestion === index && "bg-accent/10"
              )}
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={cn(
                  "w-5 h-5 transition-transform",
                  openQuestion === index && "transform rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            <motion.div
              initial={false}
              animate={{
                height: openQuestion === index ? "auto" : 0,
                opacity: openQuestion === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-accent/5">
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
