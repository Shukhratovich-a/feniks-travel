import { FC, useCallback, useState } from "react";
import cn from "classnames";

import { TourModalProps } from "./TourModal.props";

import { Modal, Button, TourBookForm, TourCallbackForm } from "@/components";

import { IconModalBack } from "@/assets/icons";

import styles from "./TourModal.module.scss";

export const TourModal: FC<TourModalProps> = ({ className, isOpen, setIsOpen, onClose, tour, ...props }) => {
  const [modalState, setModalState] = useState<"main" | "book" | "callback">("main");

  const openMain = () => {
    setModalState("main");
  };

  const renderModal = useCallback(() => {
    switch (modalState) {
      case "book":
        return (
          <div className={cn(styles.book)}>
            <button className={cn(styles.modal__back)} onClick={openMain}>
              <IconModalBack />
            </button>

            <TourBookForm tour={tour} />
          </div>
        );

      case "callback":
        return (
          <div className={cn(styles.callback)}>
            <button className={cn(styles.modal__back)} onClick={openMain}>
              <IconModalBack />
            </button>

            <TourCallbackForm />
          </div>
        );

      default:
        return (
          <div className={cn(styles.main)}>
            <Button className={cn(styles.main__button)} onClick={() => setModalState("callback")}>
              Callback
            </Button>
            <Button className={cn(styles.main__button)} onClick={() => setModalState("book")}>
              Book now!
            </Button>
          </div>
        );
    }
  }, [modalState, tour]);

  return (
    <Modal
      className={cn(styles.modal, className)}
      onClose={() => {
        setIsOpen(false);
        return onClose;
      }}
      open={isOpen}
      {...props}
    >
      <h3 className={cn(styles.modal__heading)}>{tour.title}</h3>
      {renderModal()}
    </Modal>
  );
};
