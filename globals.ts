export const colorVars = {
  background: '--background',
  foreground: '--foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  accent: '--accent',
  accentForeground: '--accent-foreground',
  destructive: '--destructive',
  destructiveForeground: '--destructive-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
  card: '--card',
  cardForeground: '--card-foreground',
};

export const animations = {
  float: (duration = 6) => ({
    animationName: 'float',
    animationDuration: duration,
    transitionTimingFunction: 'ease-in-out',
    iterationCount: Infinity,
  }),
};