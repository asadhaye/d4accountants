// src/lib/animations.ts
import { Variants } from "framer-motion";

// Fade in animation variant
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

// Slide up animation variant
export const slideUp: Variants = {
    hidden: { 
        opacity: 0,
        y: 20
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

// Scale up animation variant
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// Stagger children animation variant
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Card hover animation variant
export const cardHover: Variants = {
    rest: {
        scale: 1,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    }
};

// Button hover animation variant
export const buttonTap: Variants = {
    tap: {
        scale: 0.98
    }
};

// Page transition variants
export const pageTransition: Variants = {
    hidden: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
};

// Form field animation variants
export const formField: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// Chat message animation variants
export const chatMessage: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

// Reduced motion variants for accessibility
export const reducedMotion: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
