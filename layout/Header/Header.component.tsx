import { FC } from "react";
import cn from "classnames";

import { HeaderProps } from "./Header.props";

import { Container, Currency, Language } from "@/components";
import { Navbar } from "../Nav/Nav.component";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={cn(styles.header__container)}>
        <div className={cn(styles.header__inner)}>
          <div className={cn(styles.header__nav)}>
            <Navbar />
          </div>

          <div className={cn(styles.header__logo)}>Logo</div>

          <div className={cn(styles.header__additions)}>
            <Currency />

            <Language />
          </div>
        </div>
      </Container>
    </header>
  );
};
