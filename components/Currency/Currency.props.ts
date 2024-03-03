import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CurrencyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isScrolled?: boolean;
}
