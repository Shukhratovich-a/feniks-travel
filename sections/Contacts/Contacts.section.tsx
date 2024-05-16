import { FC } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { ContactSectionProps } from "./Contacts.props";

import { Card, Container } from "@/components";

import { IconAddress, IconPhone, IconTime, IconMail, IconPerson } from "@/assets/icons";

import styles from "./Contacts.module.scss";

export const ContactSection: FC<ContactSectionProps> = ({ className, ...props }) => {
  const { t } = useTranslation("contacts");

  return (
    <section className={cn(styles.contacts, className)} {...props}>
      <div className={cn(styles.contacts__inner)}>
        <Container className={cn(styles.contacts__container, className)}>
          <h2 className={cn(styles.contacts__heading)}>{t("heading")}</h2>

          <div className={cn(styles.contacts__content)}>
            <ul className={cn(styles.contacts__list)}>
              <li className={cn(styles.contacts__item)}>
                <IconPhone className={cn(styles.contacts__item__icon)} />

                <div className={cn(styles.contacts__item__inner)}>
                  <a href="tel:+998909190096">+998 90 919 00 96</a>
                  <span>Aziza Abdusamatova Tulkin qizi</span>
                </div>
              </li>

              <li className={cn(styles.contacts__item)}>
                <IconPhone className={cn(styles.contacts__item__icon)} />

                <div className={cn(styles.contacts__item__inner)}>
                  <a href="tel:+998909798129">+998 90 979 81 29</a>
                  <span>Aziza Abdusamatova Tulkin qizi</span>
                </div>
              </li>

              <li className={cn(styles.contacts__item)}>
                <IconMail className={cn(styles.contacts__item__icon)} />
                <a href="mailto:info.fenikstravel@gmail.com">info.fenikstravel@gmail.com</a>
              </li>

              <li className={cn(styles.contacts__item)}>
                <IconTime className={cn(styles.contacts__item__icon)} />
                <span>10:00 - 20:00</span>
              </li>

              <li className={cn(styles.contacts__item)}>
                <IconAddress className={cn(styles.contacts__item__icon)} />
                <span>{t("address")}</span>
              </li>
            </ul>

            <Card className={cn(styles.contacts__card)}>
              <iframe
                className={cn(styles.contacts__map)}
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d374.56152849568514!2d69.2662824!3d41.3199087!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzExLjciTiA2OcKwMTUnNTguNiJF!5e0!3m2!1sru!2s!4v1715857560693!5m2!1sru!2s"
                width="830"
                height="490"
                allowFullScreen
                style={{ position: "relative" }}
              />
            </Card>
          </div>
        </Container>
      </div>
    </section>
  );
};
