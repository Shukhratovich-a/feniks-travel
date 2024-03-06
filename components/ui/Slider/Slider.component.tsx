import { FC } from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import cn from "classnames";

import { SliderProps } from "./Slider.props";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Slider.module.scss";

export const Slider: FC<SliderProps> = ({ className, children, pagination = false, ...props }) => {
  const customPagination: PaginationOptions = {
    el: `.${styles.pagination}`,
    type: "bullets",
    bulletClass: `${styles.bullet}`,
    bulletActiveClass: `${styles["bullet--active"]}`,
    clickable: true,
  };

  return (
    <div>
      <Swiper
        className={cn(styles.swiper, className)}
        modules={[Pagination]}
        pagination={pagination && customPagination}
        {...props}
      >
        {children}
      </Swiper>

      <div className={cn(styles.pagination)}></div>
    </div>
  );
};
