import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ToursSectionProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {}
