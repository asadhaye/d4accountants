import type { StaggerConfig } from '../types';

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const createStaggerContainer = (config?: StaggerConfig) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: config?.staggerChildren ?? 0.2,
      delayChildren: config?.delayChildren ?? 0.1,
    },
  },
});