import { motion } from 'framer-motion';

interface BaseBannerProps {
  type: 'bottom' | 'notification';
  children: React.ReactNode;
}

export function BaseBanner({ type, children }: BaseBannerProps) {
  return (
    <motion.div className={`banner banner-${type}`}>
      {children}
    </motion.div>
  );
}