import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IDestination } from "@/interfaces/destination.interface";

export interface DestinationCardProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  destination: IDestination;
}
