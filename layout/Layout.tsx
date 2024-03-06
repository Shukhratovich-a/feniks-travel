import { FC } from "react";
import dynamic from "next/dynamic";
import cn from "classnames";

import { LayoutProps } from "./Layout.props";

import { SideBarProvider } from "@/contexts/sidebar.context";

import { Footer } from "./Footer/Footer.component";

import styles from "./Layout.module.scss";

const Header = dynamic(() => import("./Header/Header.component"), { ssr: false });
const Sidebar = dynamic(() => import("./Sidebar/Sidebar.component"), { ssr: false });

export const Layout: FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.layout)} {...props}>
      <Header className={cn(styles.layout__header)} />
      <Sidebar className={cn(styles.layout__sidebar)} />

      <main className={cn(styles.layout__main)}>{children}</main>

      <Footer className={cn(styles.layout__footer)} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <SideBarProvider isOpen={false}>
        <Layout>
          <Component {...props} />
        </Layout>
      </SideBarProvider>
    );
  };
};
