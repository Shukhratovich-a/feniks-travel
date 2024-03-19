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
                src="https://yandex.uz/map-widget/v1/?ll=69.229873%2C41.338269&mode=whatshere&whatshere%5Bpoint%5D=69.228200%2C41.339612&whatshere%5Bzoom%5D=17&z=16.8"
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
