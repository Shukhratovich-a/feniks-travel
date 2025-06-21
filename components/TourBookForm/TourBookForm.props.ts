import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ITour } from "@/interfaces/tour.interface";

export interface TourBookFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tour: ITour;
}
