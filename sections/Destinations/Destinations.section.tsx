import { FC } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { DestinationsSectionProps } from "./Destinations.props";

import { Container, DestinationCard } from "@/components";

import styles from "./Destinations.module.scss";

export const DestinationsSection: FC<DestinationsSectionProps> = ({ className, destinations, ...props }) => {
  const { t } = useTranslation("destinations");

  return (
    <section className={cn(styles.destinations, className)} {...props}>
      <div className={cn(styles.destinations__inner)}>
        <Container className={cn(styles.destinations__container, className)}>
          <h2 className={cn(styles.destinations__heading)}>{t("heading")}</h2>

          <ul className={cn(styles.destinations__list)}>
            {destinations.map((destination) => (
              <li className={cn(styles.destination)} key={destination.id}>
                <DestinationCard destination={destination} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
};
