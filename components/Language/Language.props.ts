import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LanguageProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> {
  isScrolled?: boolean;
}
