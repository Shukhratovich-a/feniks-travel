import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { AboutSectionProps } from "./About.props";

import { Card, Container } from "@/components";

import AboutImage from "@/images/about/cover.jpg";

import styles from "./About.module.scss";

export const AboutSection: FC<AboutSectionProps> = ({ className, ...props }) => {
  const { t } = useTranslation("about");

  return (
    <section className={cn(styles.about, className)} {...props}>
      <div className={cn(styles.about__inner)}>
        <Container className={cn(styles.about__container, className)}>
          <div className={cn(styles.about__content)}>
            <h2 className={cn(styles.about__heading)}>{t("heading")}</h2>

            <div className={cn(styles.about__paragraph)}>
              <p>{`Welcome to Feniks tour, where every journey is an adventure waiting to unfold. As seasoned explorers and passionate travel enthusiasts, we specialize in curating unforgettable experiences that transcend the ordinary. Our mission is simple: to ignite the spirit of wanderlust in every traveler and create memories that last a lifetime.`}</p>
              <br />
              <p>{`At Feniks tour, we believe that travel is not just about visiting new places; it's about immersing yourself in diverse cultures, savoring unique cuisines, and forging connections that span continents. Whether you're seeking a thrilling safari in the heart of Africa, a tranquil retreat on a sun-kissed island, or a cultural odyssey through ancient cities, we have the expertise and dedication to craft the perfect itinerary tailored to your desires.`}</p>
            </div>
          </div>

          <Card className={cn(styles.about__card)}>
            <Image className={cn(styles.about__image)} src={AboutImage} alt="" sizes="100%" fill />
          </Card>
        </Container>
      </div>
    </section>
  );
};
