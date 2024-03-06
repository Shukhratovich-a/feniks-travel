import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ITour } from "@/interfaces/tour.interface";
import { IDestination } from "@/interfaces/destination.interface";

export interface HomeProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  tours: ITour[];
  destinations: IDestination[];
}
