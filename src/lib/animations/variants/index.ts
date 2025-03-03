import type { Variants } from "framer-motion";

// Gradient background animation variants
export const gradientBackgroundVariants = {
  initial: { opacity: 0.5, scale: 0.8 },
  topLeft: {
    opacity: [0.4, 0.6, 0.4],
    scale: [0.8, 1.2, 0.8],
    rotate: [0, 45, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }
  },
  bottomRight: {
    opacity: [0.4, 0.6, 0.4],
    scale: [1.2, 0.8, 1.2],
    rotate: [0, -45, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }
  }
};

// Floating elements animation variants
export const floatingElementVariants = {
  initial: (element: { x: number; y: number; scale: number }) => ({
    x: element.x,
    y: element.y,
    scale: element.scale,
  }),
  animate: (element: { x: number; y: number }) => ({
    y: [Math.random() * element.y, Math.random() * element.y],
    x: [Math.random() * element.x, Math.random() * element.x],
    transition: {
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      ease: "linear",
    }
  })
};

// Fade in animation variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};