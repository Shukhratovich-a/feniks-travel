import { FC, useContext } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { SidebarProps } from "./Sidebar.props";

import { SideBarContext } from "@/contexts/sidebar.context";

import { routes } from "@/helpers/routes.helper";

import { Burger, Container, Currency, Language, Logo } from "@/components";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const isTable = useMediaQuery({ maxWidth: 850 });
  const { t } = useTranslation("nav");
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const menuController = () => {
    if (setIsOpen) setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { x: "100%" },

    visible: { x: 0 },
  };

  return (
    isTable && (
      <motion.div
        className={cn(styles.sidebar, className)}
        variants={variants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
        transition={{ ease: "backIn", x: { duration: 0.4 } }}
        {...props}
      >
        <Container className={cn(styles.sidebar__container)}>
          <div className={cn(styles.sidebar__header)}>
            <div className={cn(styles.sidebar__header__inner)}>
              <Logo />

              <div className={cn(styles.sidebar__header__additions)}>
                <Burger isActive={true} onClick={menuController} />
              </div>
            </div>
          </div>

          <nav className={cn(styles.header__nav)}>
            <ul className={cn(styles.header__nav__list)}>
              {routes.length &&
                routes.map((route) => (
                  <li className={cn(styles.header__nav__item)} key={route.id}>
                    <Link
                      className={cn(styles.header__nav__link, "nav-link-text")}
                      href={route.href}
                      onClick={menuController}
                    >
                      {t(route.title)}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </motion.div>
    )
  );
};

export default Sidebar;
