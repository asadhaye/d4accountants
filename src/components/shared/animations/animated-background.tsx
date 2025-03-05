"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useFloatingElements } from "@/hooks/use-floating-elements";
import type { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  floatingElementsCount?: number;
}

export function AnimatedBackground({ 
  children, 
  floatingElementsCount = 10 
}: AnimatedBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const floatingElements = useFloatingElements(floatingElementsCount);

  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 opacity-90" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradients - optimized for performance */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 opacity-90" />
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [0.3, 0.4, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full transform-gpu"
        />
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [0.3, 0.4, 0.3],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/20 to-teal-500/20 blur-3xl rounded-full transform-gpu"
        />
      </div>

      {/* Floating Elements - optimized with transform-gpu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            initial={{
              x: element.x,
              y: element.y,
              scale: element.scale,
            }}
            animate={{
              y: [element.y - 50, element.y + 50],
              x: [element.x - 50, element.x + 50],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              yoyo: true,
            }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 transform-gpu will-change-transform"
          />
        ))}
      </motion.div>

      {/* Content with glass morphism effect */}
      <div className="relative z-10 backdrop-blur-none">
        {children}
      </div>
    </div>
  );
}