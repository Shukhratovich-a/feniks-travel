import { FC, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { HeaderProps } from "./Header.props";

import { SideBarContext } from "@/contexts/sidebar.context";

import { Burger, Container, Currency, Language, Logo } from "@/components";
import { Navbar } from "../Nav/Nav.component";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const isTablet = useMediaQuery({ maxWidth: 850 });

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const menuController = () => {
    if (setIsOpen) setIsOpen(!isOpen);
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={cn(styles.header__container)}>
        <div className={cn(styles.header__inner)}>
          {!isTablet && (
            <div className={cn(styles.header__nav)}>
              <Navbar />
            </div>
          )}

          <Logo className={cn(styles.header__logo)} />

          <div className={cn(styles.header__additions)}>
            <Currency />

            <Language />

            {isTablet && <Burger isActive={false} onClick={menuController} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
