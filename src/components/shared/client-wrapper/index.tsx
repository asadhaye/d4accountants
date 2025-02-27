"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

interface ClientWrapperProps {
  children: ReactNode;
  className?: string;
  showDelay?: number;
}

export function ClientWrapper({ 
  children, 
  className = "", 
  showDelay = 0 
}: ClientWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), showDelay);
    return () => clearTimeout(timer);
  }, [showDelay]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}