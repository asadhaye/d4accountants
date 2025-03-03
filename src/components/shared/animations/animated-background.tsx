"use client";

import { motion } from "framer-motion";
import { useFloatingElements } from "@/hooks/use-floating-elements";
import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  floatingElementsCount?: number;
}

export function AnimatedBackground({ 
  children, 
  floatingElementsCount = 20 
}: AnimatedBackgroundProps) {
  const floatingElements = useFloatingElements(floatingElementsCount);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-teal-950 to-blue-950 opacity-90" />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.2, 0.8, 1.2],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/20 to-teal-500/20 blur-3xl rounded-full"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
              y: [
                Math.random() * element.y,
                Math.random() * element.y,
              ],
              x: [
                Math.random() * element.x,
                Math.random() * element.x,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          />
        ))}
      </motion.div>

      {/* Content with glass morphism effect */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}