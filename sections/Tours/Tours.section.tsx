import { FC } from "react";
import cn from "classnames";

import { ToursSectionProps } from "./Tours.props";

import { Container } from "@/components";

import styles from "./Tours.module.scss";

export const ToursSection: FC<ToursSectionProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.tours, className)} {...props}>
      <Container>tours</Container>
    </section>
  );
};
