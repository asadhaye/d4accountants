import type { Variants } from 'framer-motion';

export interface AnimationVariant {
  hidden: Variants['hidden'];
  visible: Variants['visible'];
}

export interface StaggerConfig {
  delayChildren?: number;
  staggerChildren?: number;
}