import { FC, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { TourCardProps } from "./TourCard.props";

import { DOMAIN } from "@/helpers/api.helper";

import { Card, Rating, TourModal } from "@/components";

import { IconLocation } from "@/icons";

import styles from "./TourCard.module.scss";

export const TourCard: FC<TourCardProps> = ({ className, tour, ...props }) => {
  const { image, title, destination, rating, days, nights, price } = tour;
  const { t } = useTranslation(["destinations"]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn(styles.card, className)} {...props}>
      <div onClick={() => setIsOpen(true)}>
        <div className={cn(styles.card__image)}>
          <Image src={`${DOMAIN}${image}`} alt={title} sizes="100%" fill priority />
        </div>

        <div className={cn(styles.card__content)}>
          <span
            className={cn(styles.card__destination)}
            title={t(destination.name ? destination.name : destination.title)}
          >
            <IconLocation className={cn(styles.card__destination__icon)} />
            <span className={cn(styles.card__destination__title)}>
              {t(destination.name ? destination.name : destination.title)}
            </span>
          </span>

          <h2 className={cn(styles.card__title)} title={title}>
            {title}
          </h2>

          <span className={cn(styles.card__rating)}>
            <Rating rating={rating} />
            {rating}
          </span>

          <div className={cn(styles.card__content__bottom)}>
            <span>
              {`${days} ${t("common:days")}`} {nights && `${nights} ${t("common:nights")}`}
            </span>

            <span>
              <strong>{price}</strong>
            </span>
          </div>
        </div>
      </div>

      <TourModal isOpen={isOpen} setIsOpen={setIsOpen} tour={tour} />
    </Card>
  );
};
