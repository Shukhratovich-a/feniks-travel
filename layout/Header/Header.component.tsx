import { FC, useCallback, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { HeaderProps } from "./Header.props";

import { SideBarContext } from "@/contexts/sidebar.context";

import { Burger, Container, Currency, Language, Logo } from "@/components";
import { Navbar } from "../Nav/Nav.component";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const isBrowser = typeof window !== undefined;

  const isDesktop = useMediaQuery({ maxWidth: 1200 });
  const isTablet = useMediaQuery({ maxWidth: 850 });
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const scrollThreshold = isMobile ? 70 : isTablet ? 80 : isDesktop ? 100 : 100;

  const [scrolled, setScrolled] = useState(false);

  const menuController = () => {
    if (setIsOpen) setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    if (!isBrowser) return;

    const isScrolled = window.scrollY > scrollThreshold;

    setScrolled(isScrolled);
  }, [isBrowser, scrollThreshold]);

  useEffect(() => {
    if (!isBrowser) return;

    return handleScroll();
  }, [handleScroll, isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isBrowser]);

  return (
    <header
      className={cn(styles.header, className, {
        [styles["header--scroll"]]: scrolled,
      })}
      {...props}
    >
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
