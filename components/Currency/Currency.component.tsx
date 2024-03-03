import { FC, useState } from "react";
import cn from "classnames";

import { CurrencyProps } from "./Currency.props";

import { currencies } from "@/helpers/currency.helper";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { IconArrowBottom } from "@/icons";

import styles from "./Currency.module.scss";

export const Currency: FC<CurrencyProps> = ({ className, isScrolled, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  const handleClose = () => {
    if (!isOpen) return;
    setIsOpen(false);
  };

  const handleChange = async (currency?: string) => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClose);

  return (
    <div
      className={cn(styles["currency"], "button", className, { [styles["currency--scrolled"]]: isScrolled })}
      ref={ref}
      {...props}
    >
      <span className={cn(styles["currency--selected"])} onClick={!isOpen ? handleOpen : handleClose}>
        <span>{currencies[0].currency}</span>
        <IconArrowBottom />
      </span>

      <ul
        className={cn(styles["currency__list"], {
          [styles["currency__list--open"]]: isOpen,
        })}
      >
        {currencies.map(({ currency }) => (
          <li className={cn(styles.currency__list__item)} key={currency} onClick={() => handleChange(currency)}>
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};
