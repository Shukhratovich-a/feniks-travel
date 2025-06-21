import { FC } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.props";

import { IconModalClose } from "@/assets/icons";

import styles from "./Alert.module.scss";

export const Alert: FC<AlertProps> = ({ className, children, isOpen, setIsOpen, appearance = "primary", ...props }) => {
  return (
    <div
      className={cn(styles.alert, className, {
        [styles["alert--primary"]]: appearance === "primary",
        [styles["alert--warning"]]: appearance === "warning",
        [styles["alert--danger"]]: appearance === "danger",
      })}
      {...props}
    >
      <button className={cn(styles.alert__button)} type="button">
        <IconModalClose />
      </button>

      {children}
    </div>
  );
};
