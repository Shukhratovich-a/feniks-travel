import { DetailedHTMLProps, DialogHTMLAttributes } from "react";

export interface ModalProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  locked?: boolean;
  onClose: () => void;
}
