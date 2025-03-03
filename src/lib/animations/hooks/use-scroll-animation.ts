import { useScroll, useTransform, type MotionValue } from 'framer-motion';

export function useScrollAnimation(range: [number, number] = [0, 1], output: [number, number] = [0, 1]): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, range, output);
}