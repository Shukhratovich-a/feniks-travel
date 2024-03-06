import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ITour } from "@/interfaces/tour.interface";

export interface ToursSectionProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  tours: ITour[];
}
