import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ITour } from "@/interfaces/tour.interface";

export interface TourCardProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  tour: ITour;
}
