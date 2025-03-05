import type { Variants } from 'framer-motion';

export type AnimationVariant = Variants

export interface StaggerConfig {
  delayChildren?: number;
  staggerChildren?: number;
}