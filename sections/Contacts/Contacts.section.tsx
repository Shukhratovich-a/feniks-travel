import { FC } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { ContactSectionProps } from "./Contacts.props";

import { Container, DestinationCard } from "@/components";

import styles from "./Contacts.module.scss";

export const ContactSection: FC<ContactSectionProps> = ({ className, ...props }) => {
  const { t } = useTranslation("contacts");

  return (
    <section className={cn(styles.contacts, className)} {...props}>
      <div className={cn(styles.contacts__inner)}>
        <Container className={cn(styles.contacts__container, className)}>
          <h2 className={cn(styles.contacts__heading)}>{t("heading")}</h2>
        </Container>
      </div>
    </section>
  );
};
