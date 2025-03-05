'use client';

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card' | 'text' | 'avatar';
}

export function Skeleton({
  className,
  variant = 'default',
  ...props
}: SkeletonProps) {
  const baseStyles = "animate-pulse rounded-md bg-neutral-200/70 dark:bg-neutral-800/70";
  const variantStyles = {
    default: "",
    card: "h-[125px] w-full",
    text: "h-4 w-full",
    avatar: "h-12 w-12 rounded-full"
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
}
