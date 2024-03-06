import { FC } from "react";
import Image from "next/image";
import cn from "classnames";

import { TourCardProps } from "./TourCard.props";

import { Card } from "@/components";

import { IconLocation } from "@/icons";

import styles from "./TourCard.module.scss";
import { Rating } from "../ui/Rating/Rating.component";

export const TourCard: FC<TourCardProps> = ({ className, tour, ...props }) => {
  const { image, title, destination, rating, duration, price } = tour;

  return (
    <Card className={cn(styles.card, className)} {...props}>
      <div className={cn(styles.card__image)}>
        <Image src={image} alt={title} sizes="100%" fill priority />
      </div>

      <div className={cn(styles.card__content)}>
        <span className={cn(styles.card__destination)}>
          <IconLocation className={cn(styles.card__destination__icon)} />
          {destination.title}
        </span>

        <h2 className={cn(styles.card__title)}>{title}</h2>

        <span className={cn(styles.card__rating)}>
          <Rating rating={rating} />
          {rating}
        </span>

        <div className={cn(styles.card__content__bottom)}>
          <span>{duration} days</span>

          <span>
            From: <strong>${price}</strong>
          </span>
        </div>
      </div>
    </Card>
  );
};
