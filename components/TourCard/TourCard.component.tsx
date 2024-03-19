import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { TourCardProps } from "./TourCard.props";

import { Card, Rating } from "@/components";

import { IconLocation } from "@/icons";

import styles from "./TourCard.module.scss";

export const TourCard: FC<TourCardProps> = ({ className, tour, ...props }) => {
  const { image, title, destination, rating, duration, price } = tour;
  const { t } = useTranslation(["destinations"]);

  return (
    <Card className={cn(styles.card, className)} {...props}>
      <div className={cn(styles.card__image)}>
        <Image src={image} alt={title} sizes="100%" fill priority />
      </div>

      <div className={cn(styles.card__content)}>
        <span className={cn(styles.card__destination)} title={t(destination.title)}>
          <IconLocation className={cn(styles.card__destination__icon)} />
          <span className={cn(styles.card__destination__title)}>{t(destination.title)}</span>
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
            {`${duration.days} ${t("common:days")}`} {duration.nights && `${duration.nights} ${t("common:nights")}`}
          </span>

          <span>
            <strong>${price}</strong>
          </span>
        </div>
      </div>
    </Card>
  );
};
