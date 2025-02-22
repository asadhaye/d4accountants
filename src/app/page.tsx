// src/app/page.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { default as ChatBot } from "@/components/ChatBot";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { motion } from "framer-motion";
import {
    fadeIn,
    slideUp,
    staggerContainer,
    cardHover,
    buttonHover,
} from "@/lib/animations";

export default function Home() {
    return (
        <motion.div
            className="flex flex-col min-h-screen"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            {/* Hero Section */}
            <motion.section
                className="relative h-[90vh] flex items-center justify-center text-white"
                variants={slideUp}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/images/hero-accounting.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container mx-auto px-6 py-16 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight relative z-10"
                        variants={slideUp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Expert Accounting Services for Your Business
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light tracking-wide relative z-10"
                        variants={slideUp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Professional accounting solutions tailored to help your business
                        grow and succeed
                    </motion.p>
                    <motion.div
                        className="flex gap-4 justify-center"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button
                                size="lg"
                                variant="default"
                                className="bg-white text-blue-800 hover:bg-gray-100 transform transition-all duration-200 font-semibold flex items-center gap-2 relative z-10"
                            >
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 transform transition-all duration-200 font-semibold flex items-center gap-2 relative z-10"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="py-20 bg-gray-50 dark:bg-gray-900"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        variants={slideUp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Service Cards */}
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
                            variants={cardHover}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="mb-4 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                                <Image
                                    src="/icons/tax-planning.svg"
                                    alt="Tax Planning"
                                    width={48}
                                    height={48}
                                    className="transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Tax Planning</h3>
                            <p className="text-gray-600">
                                Strategic tax planning to minimize your tax liability and
                                maximize savings.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
                            variants={cardHover}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="mb-4 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                                <Image
                                    src="/icons/bookkeeping.svg"
                                    alt="Bookkeeping"
                                    width={48}
                                    height={48}
                                    className="transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Bookkeeping</h3>
                            <p className="text-gray-600">
                                Accurate and timely bookkeeping services to keep your finances
                                organized.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
                            variants={cardHover}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="mb-4 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                                <Image
                                    src="/icons/financial-advisory.svg"
                                    alt="Financial Advisory"
                                    width={48}
                                    height={48}
                                    className="transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Financial Advisory</h3>
                            <p className="text-gray-600">
                                Expert financial guidance to help you make informed business
                                decisions.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="relative py-24 text-white overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 transform rotate-2 scale-105"></div>
                <div className="absolute inset-0 bg-[url('/images/hero-accounting.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100"
                        variants={slideUp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto"
                        variants={slideUp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Get in touch with us today for a free consultation
                    </motion.p>
                    <motion.div
                        variants={buttonHover}
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Button
                            size="lg"
                            variant="default"
                            className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Contact Us Now
                        </Button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Lead Capture Form */}
            <LeadCaptureForm service="tax-planning" />

            {/* Chat Bot */}
            <ChatBot />
        </motion.div>
    );
}