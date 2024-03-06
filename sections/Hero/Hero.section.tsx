import { FC } from "react";
import Image from "next/image";
import cn from "classnames";

import { HeroSectionProps } from "./Hero.props";

import { Container } from "@/components";

import HeroBackground from "@/images/hero-background.jpg";

import styles from "./Hero.module.scss";

export const HeroSection: FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.hero, className)} {...props}>
      <Image
        className={cn(styles.hero__background)}
        src={HeroBackground}
        alt="Image"
        sizes="100vw"
        placeholder="blur"
        fill
        quality={100}
      />

      <Container className={cn(styles.hero__container)}>
        <div className={cn(styles.hero__content)}>
          <h1 className={cn(styles.hero__content__heading)}>Tours and Trip packages Globally</h1>

          <p className={cn(styles.hero__content__title)}>Tours and Trip packages Globally</p>
        </div>
      </Container>
    </section>
  );
};