import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  default: "rounded-lg border bg-card text-card-foreground shadow-sm",
  interactive: "hover:bg-accent/50 transition-colors",
};

// Base component creator to reduce duplication
const createComponent = <T extends keyof HTMLElementTagNameMap>(
  element: T,
  defaultClassName: string
) => {
  type Props = HTMLMotionProps<T> & {
    className?: string | undefined;
  };

  const Component = React.forwardRef<HTMLElementTagNameMap[T], Props>(
    (props, ref) => {
      const MotionComponent = motion[element] as React.ComponentType<Props>;
      return (
        <MotionComponent
          ref={ref}
          className={cn(defaultClassName, 'className' in props ? props.className : undefined)}
          {...props}
        />
      );
    }
  );

  Component.displayName = `Motion${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  return Component;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }
>(({ className, interactive, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      cardVariants.default,
      interactive && cardVariants.interactive,
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = createComponent("div", "flex flex-col space-y-1.5 p-6");
CardHeader.displayName = "CardHeader";

const CardTitle = createComponent(
  "h3",
  "text-2xl font-semibold leading-none tracking-tight"
);
CardTitle.displayName = "CardTitle";

const CardDescription = createComponent(
  "p",
  "text-sm text-muted-foreground"
);
CardDescription.displayName = "CardDescription";

const CardContent = createComponent("div", "p-6 pt-0");
CardContent.displayName = "CardContent";

const CardFooter = createComponent("div", "flex items-center p-6 pt-0");
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
