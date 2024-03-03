import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HomeProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {}
