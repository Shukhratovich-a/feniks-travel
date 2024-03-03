import React from "react";
import cn from "classnames";

import { InputProps } from "./Input.props";

export const Input = React.forwardRef(
  ({ className, error, ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div>
        <input ref={ref} {...props} />
        {error && <span>{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
