"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What accounting services do you offer?",
      answer:
        "We offer a comprehensive range of accounting services including tax planning, bookkeeping, financial advisory, payroll management, and business consulting. Our team of experts can help with both personal and business accounting needs.",
    },
    {
      question: "How often should I review my tax planning strategy?",
      answer:
        "We recommend reviewing your tax planning strategy at least annually, or whenever there are significant changes in your business or personal financial situation. Regular reviews help ensure you're taking advantage of all available tax benefits and staying compliant with current regulations.",
    },
    {
      question: "What records do I need to keep for tax purposes?",
      answer:
        "You should keep all records of income, expenses, investments, and charitable donations. This includes receipts, invoices, bank statements, and any documentation related to tax deductions. We recommend keeping these records for at least 6 years.",
    },
    {
      question: "How can I reduce my tax liability legally?",
      answer:
        "There are several legal ways to reduce your tax liability, including maximizing deductions, timing your income and expenses strategically, utilizing tax-advantaged investments, and structuring your business efficiently. Our tax planning experts can help develop a personalized strategy.",
    },
    {
      question: "What's included in your bookkeeping services?",
      answer:
        "Our bookkeeping services include maintaining accurate financial records, reconciling bank statements, managing accounts payable and receivable, preparing financial statements, and providing regular financial reports. We can customize our services to meet your specific needs.",
    },
    {
      question: "How can your financial advisory services help my business?",
      answer:
        "Our financial advisory services help businesses make informed decisions about investments, growth strategies, cash flow management, and long-term planning. We provide detailed analysis, forecasting, and recommendations tailored to your business goals.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We serve a diverse range of industries, but we have particular expertise in working with small businesses, startups, and e-commerce companies. Our team understands the unique challenges and opportunities these industries face.",
    },
    {
      question: "Do you offer remote accounting services?",
      answer:
        "Yes, we offer remote accounting services to clients across the UK. Our secure online platform allows for seamless communication and collaboration, regardless of your location.",
    },
    {
      question: "What is the process for becoming a client?",
      answer:
        "To become a client, simply contact us through our website or by phone to schedule a consultation. During the consultation, we'll discuss your accounting needs and explain how we can help.",
    },
    {
      question: "How do you ensure the confidentiality of my financial data?",
      answer:
        "We take data security and confidentiality very seriously. We use industry-leading encryption and security measures to protect your financial data. Our team members are also trained on data privacy best practices.",
    },
  ];

  return (
    <motion.main
      className="container mx-auto px-6 py-12 max-w-4xl"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
        variants={slideUp}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        className="text-muted-foreground text-center mb-12"
        variants={slideUp}
      >
        Find answers to common questions about our accounting and tax services.
      </motion.p>
      <motion.div className="space-y-4" variants={staggerContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
            variants={slideUp}
          >
            <Button
              variant="ghost"
              className="w-full p-4 flex justify-between items-center text-left"
              onClick={() =>
                setOpenQuestion(openQuestion === index ? null : index)
              }
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={cn(
                  "w-5 h-5 transition-transform",
                  openQuestion === index ? "rotate-180" : ""
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
            {openQuestion === index && (
              <motion.div
                className="p-4 bg-muted/50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="mt-12 text-center" variants={slideUp}>
        <p className="text-muted-foreground mb-4">
          Still have questions? We are here to help!
        </p>
        <Button
          variant="default"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-white font-semibold px-6 py-2"
        >
          Contact Us
        </Button>
      </motion.div>
    </motion.main>
  );
}