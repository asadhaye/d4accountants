'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations/animations";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What accounting services do you offer?",
    answer: "We offer a comprehensive range of accounting services including tax planning, bookkeeping, financial advisory, and business consulting. Our services cover personal tax returns, corporate tax planning, VAT returns, payroll management, year-end accounts preparation, and strategic financial planning."
  },
  {
    question: "How can I minimize my tax liability?",
    answer: "We help minimize your tax liability through strategic tax planning, which includes identifying allowable expenses, maximizing tax reliefs and allowances, structuring your business efficiently, and ensuring compliance with tax regulations. We stay updated with the latest tax laws to provide optimal tax-saving strategies."
  },
  {
    question: "What bookkeeping services do you provide?",
    answer: "Our bookkeeping services include daily transaction recording, bank reconciliation, accounts payable and receivable management, financial statement preparation, and digital accounting solutions. We use modern accounting software to ensure accuracy and provide real-time financial insights."
  },
  {
    question: "Do you offer financial advisory services?",
    answer: "Yes, we provide comprehensive financial advisory services including business planning, investment analysis, cash flow management, budgeting, and financial forecasting. We help businesses make informed decisions for sustainable growth and profitability."
  },
  {
    question: "How do you handle client confidentiality?",
    answer: "We maintain strict confidentiality of all client information in accordance with professional standards and data protection regulations. Our systems are secure, and we have robust protocols in place to protect your financial and personal information."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fees are transparent and based on the scope of services required. We offer flexible payment plans and can provide a detailed quote after understanding your specific needs. We believe in delivering value for money while maintaining high-quality service."
  },
  {
    question: "How often will I receive financial reports?",
    answer: "We provide regular financial reports tailored to your business needs - monthly, quarterly, or annually. These reports include profit and loss statements, balance sheets, cash flow statements, and customized financial analytics to help you track your business performance."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Yes, we work with businesses of all sizes, from startups to established companies. We understand the unique challenges of small businesses and can provide scalable solutions that grow with your business, including essential compliance services and growth strategy advice."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy. Simply contact us through our website or phone to schedule a free initial consultation. We'll discuss your needs, answer your questions, and create a tailored service package that meets your requirements and budget."
  },
  {
    question: "What areas do you serve?",
    answer: "We are based in Altrincham and serve clients throughout the Greater Manchester area and across the UK. We can work remotely with clients nationwide, utilizing digital tools and regular video conferences to maintain effective communication."
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
