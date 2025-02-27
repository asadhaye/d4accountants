// src/lib/animations.ts
import type { Variants } from "framer-motion";

// Keep only the animations that are actually used in components
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Removed unused animations:
// scaleUp, cardHover, buttonTap, pageTransition, formField, chatMessage, reducedMotion
