import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeroSectionProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {}
