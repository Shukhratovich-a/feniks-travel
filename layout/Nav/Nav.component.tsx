import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { NavbarProps } from "./Nav.props";

import { routes } from "@/helpers/routes.helper";

import styles from "./Nav.module.scss";

export const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  const { t } = useTranslation("nav");

  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <ul className={cn(styles.nav__list)}>
        {routes.map((route) => (
          <li className={cn(styles.nav__item)} key={route.id}>
            <Link className={cn(styles.nav__link)} href={route.href}>
              {t(route.title)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
