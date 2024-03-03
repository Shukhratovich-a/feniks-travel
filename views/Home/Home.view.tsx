import cn from "classnames";

import { HomeProps } from "./Home.props";

import { HeroSection, ToursSection } from "@/sections";

import styles from "./Home.module.scss";

export const HomeView = ({ className, ...props }: HomeProps) => {
  return (
    <div className={cn(styles.view, className)} {...props}>
      <HeroSection id="hero" />
      <ToursSection id="tours" />
    </div>
  );
};
