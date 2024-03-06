import { FC } from "react";
import { useTranslation } from "next-i18next";
import { SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { ToursSectionProps } from "./Tours.props";

import { Container, Slider, TourCard } from "@/components";

import styles from "./Tours.module.scss";

export const ToursSection: FC<ToursSectionProps> = ({ className, tours, ...props }) => {
  const { t } = useTranslation("tours");

  const isDesktop = useMediaQuery({ maxWidth: 1200 });
  const isTablet = useMediaQuery({ maxWidth: 850 });
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const perView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;
  const spaceBetween = isMobile ? 15 : isTablet ? 20 : isDesktop ? 30 : 30;

  return (
    <section className={cn(styles.tours, className)} {...props}>
      <div className={cn(styles.tours__inner)}>
        <Container className={cn(styles.tours__container, className)}>
          <h2 className={cn(styles.tours__heading)}>{t("heading")}</h2>

          <Slider
            className={cn(styles.tours__list)}
            slidesPerView={perView}
            spaceBetween={spaceBetween}
            pagination={true}
          >
            {tours.map((tour) => (
              <SwiperSlide className={cn(styles.tour)} key={tour.id}>
                <TourCard tour={tour} />
              </SwiperSlide>
            ))}
          </Slider>
        </Container>
      </div>
    </section>
  );
};
