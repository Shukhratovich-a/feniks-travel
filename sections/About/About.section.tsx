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

            <div className={cn(styles.about__paragraph)} dangerouslySetInnerHTML={{ __html: t("description") }} />
          </div>

          <Card className={cn(styles.about__card)}>
            <Image className={cn(styles.about__image)} src={AboutImage} alt="" sizes="100%" fill />
          </Card>
        </Container>
      </div>
    </section>
  );
};
