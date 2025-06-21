import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  setIsOpen?: () => void;
  appearance?: "primary" | "danger" | "warning";
}
