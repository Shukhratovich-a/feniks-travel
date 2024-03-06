import { FC } from "react";
import Image from "next/image";
import cn from "classnames";

import { DestinationCardProps } from "./DestinationCard.props";

import { Card } from "@/components";

import styles from "./DestinationCard.module.scss";

export const DestinationCard: FC<DestinationCardProps> = ({ className, destination, ...props }) => {
  const { title, image } = destination;

  return (
    <Card className={cn(styles.card, className)} {...props}>
      <Image className={cn(styles.card__image)} src={image} alt={title} sizes="100%" fill priority />

      <h3 className={cn(styles.card__title)}>{title}</h3>
    </Card>
  );
};
