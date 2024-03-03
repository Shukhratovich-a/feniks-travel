import { FC } from "react";
import { Montserrat, Inter } from "next/font/google";
import cn from "classnames";

import { LayoutProps } from "./Layout.props";

import { Footer } from "./Footer/Footer.component";
import { Header } from "./Header/Header.component";

import styles from "./Layout.module.scss";

export const Layout: FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.layout)} {...props}>
      <Header className={cn(styles.layout__header)} />

      <main className={cn(styles.layout__main)}>{children}</main>

      <Footer className={cn(styles.layout__footer)} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
