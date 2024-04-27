import { FC, MouseEvent, useCallback, useEffect, useMemo, useRef } from "react";
import cn from "classnames";

import { ModalProps } from "./Modal.props";

import { IconModalClose, IconModalBack } from "@/assets/icons";

import styles from "./Modal.module.scss";

export const Modal: FC<ModalProps> = ({ className, open, onClose, locked = false, children, ...props }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onCancel = useCallback(
    ({ preventDefault }: MouseEvent<HTMLDialogElement>) => {
      preventDefault();
      if (!locked) onClose();
    },
    [locked, onClose]
  );

  const onClick = useCallback(
    ({ target }: MouseEvent<HTMLDialogElement>) => {
      const { current: el } = modalRef;
      if (target === el && !locked) onClose();
    },
    [locked, onClose]
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open && el) el.close();
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open && el) el.showModal();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className={cn(styles["modal"], className, {
        [styles["modal--closing"]]: !open,
      })}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      {...props}
    >
      <div className={styles["modal__container"]}>
        <button className={cn(styles.modal__button)} onClick={onClose}>
          <IconModalClose />
        </button>
        {children}
      </div>
    </dialog>
  );
};
