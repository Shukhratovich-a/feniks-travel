import cn from "classnames";

import { HomeProps } from "./Home.props";

import { HeroSection, ToursSection, DestinationsSection, ContactSection } from "@/sections";

import styles from "./Home.module.scss";
import { AboutSection } from "@/sections/About/About.section";

export const HomeView = ({ className, tours, destinations, ...props }: HomeProps) => {
  return (
    <div className={cn(styles.view, className)} {...props}>
      <HeroSection id="hero" />

      <ToursSection id="tours" tours={tours} />

      <DestinationsSection id="destinations" destinations={destinations} />

      <AboutSection id="about" />

      <ContactSection id="contact" />
    </div>
  );
};
