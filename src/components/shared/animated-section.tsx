import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const combinedVariants = {
    hidden: {
      ...fadeIn.hidden,
      ...slideUp.hidden,
    },
    show: {
      ...fadeIn.visible,
      ...slideUp.visible,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      variants={combinedVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.section>
  );
};
