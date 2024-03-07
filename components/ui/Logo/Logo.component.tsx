import { FC } from "react";
import cn from "classnames";

import { LogoProps } from "./Logo.props";

import styles from "./Logo.module.scss";

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      Feniks Travel
    </div>
  );
};
