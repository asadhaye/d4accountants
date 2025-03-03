"use client";

import { motion } from "framer-motion";
import { useFloatingElements } from "@/hooks/use-floating-elements";
import { gradientBackgroundVariants, floatingElementVariants, fadeInVariants } from "../variants";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GradientBackground() {
  return (
    <>
      <motion.div
        variants={gradientBackgroundVariants}
        initial="initial"
        animate="topLeft"
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full"
      />
      <motion.div
        variants={gradientBackgroundVariants}
        initial="initial"
        animate="bottomRight"
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/20 to-teal-500/20 blur-3xl rounded-full"
      />
    </>
  );
}

interface FloatingBackgroundProps {
  count?: number;
}

export function FloatingBackground({ count = 10 }: FloatingBackgroundProps) {
  const floatingElements = useFloatingElements(count);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-0"
    >
      {floatingElements.map((element, i) => (
        <motion.div
          key={i}
          variants={floatingElementVariants}
          initial="initial"
          animate="animate"
          custom={element}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
        />
      ))}
    </motion.div>
  );
}