import * as React from "react";
import { BaseInput } from "./BaseInput";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof BaseInput>
>((props, ref) => {
  return <BaseInput ref={ref} {...props} />;
});

Input.displayName = "Input";

export { Input };
