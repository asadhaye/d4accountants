// src/lib/animations.ts
import { Variants } from "framer-motion";

// Fade in animation variant
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Slide up animation variant
export const slideUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Scale up animation variant
export const scaleUp: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

// Stagger children animation variant
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Card hover animation variant
export const cardHover: Variants = {
    hover: {
        y: -5,
        transition: { duration: 0.2 },
    },
};

// Button hover animation variant
export const buttonHover: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 },
    },
    tap: {
        scale: 0.95,
    },
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