import { FC } from "react";
import cn from "classnames";

import { CardProps } from "./Card.props";

import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};
