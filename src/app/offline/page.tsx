"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp } from "@/lib/animations";

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-background p-4"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        className="max-w-md w-full space-y-8 text-center"
        variants={slideUp}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </motion.div>
          <motion.h1
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            You are Offline
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            It seems you&apos;ve lost your internet connection. Please check your
            connection and try again. {/* Escaped 'you've' with &apos; */}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={handleRetry}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Try Again
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}