import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface NavbarProps
  extends Omit<DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {}
