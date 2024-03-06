import { SwiperProps } from "swiper/react";
import { PropsWithChildren } from "react";
import { PaginationOptions } from "swiper/types";

export interface SliderProps extends PropsWithChildren<SwiperProps> {
  pagination?: boolean;
}
