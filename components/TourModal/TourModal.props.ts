import { DetailedHTMLProps, DialogHTMLAttributes } from "react";

import { ITour } from "@/interfaces/tour.interface";

export interface TourModalProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tour: ITour;
}
