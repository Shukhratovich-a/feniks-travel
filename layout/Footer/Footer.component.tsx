import { FC } from "react";
import cn from "classnames";

import { FooterProps } from "./Footer.props";

import { Container } from "@/components";

import styles from "./Footer.module.scss";

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container>Footer</Container>
    </footer>
  );
};
