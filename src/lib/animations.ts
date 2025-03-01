// src/lib/animations.ts
import type { Variants } from "framer-motion";

// Utility function to check if user prefers reduced motion
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

// Enhanced scroll animations
export const scrollFadeUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 100,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay: custom * 0.1,
    }
  }),
  reducedMotion: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 }
  }
};

export const scrollScale: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay: custom * 0.1,
    }
  }),
  reducedMotion: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0 }
  }
};

// Base animations with reduced motion variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  reducedMotion: {
    opacity: 1,
    transition: { duration: 0 }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  reducedMotion: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  reducedMotion: {
    opacity: 1,
    transition: {
      staggerChildren: 0
    }
  }
};

// Custom hook for handling motion preferences
export const useReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches ? 'reducedMotion' : 'show';
};
