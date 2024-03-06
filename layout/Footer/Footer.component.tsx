import { FC } from "react";
import cn from "classnames";

import { FooterProps } from "./Footer.props";

import { Container } from "@/components";

import styles from "./Footer.module.scss";

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container className={cn(styles.footer__container)}>
        <span className={cn(styles.footer__note)}>© Feniks travel 2024</span>
      </Container>
    </footer>
  );
};
