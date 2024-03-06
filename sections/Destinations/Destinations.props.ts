import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDestination } from "@/interfaces/destination.interface";

export interface DestinationsSectionProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  destinations: IDestination[];
}
