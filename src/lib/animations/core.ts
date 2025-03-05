export const baseAnimations = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  },
  slideIn: {
    hidden: { x: -100 },
    show: { x: 0 }
  }
};

export const createVariant = (base: keyof typeof baseAnimations, options = {}) => ({
  ...baseAnimations[base],
  ...options
});