import { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
