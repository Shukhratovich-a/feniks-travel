import { FC } from "react";
import cn from "classnames";

import { BurgerProps } from "./Burger.props";

import { IconBurger, IconClose } from "@/icons";

import styles from "./Burger.module.scss";

export const Burger: FC<BurgerProps> = ({ className, isActive = false, ...props }) => {
  return (
    <button className={cn(styles.burger, className)} {...props}>
      {isActive ? <IconClose /> : <IconBurger />}
    </button>
  );
};
