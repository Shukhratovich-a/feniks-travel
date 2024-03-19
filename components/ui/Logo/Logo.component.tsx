import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import { LogoProps } from "./Logo.props";

import ImageLogo from "@/images/logo/logo.webp";

import styles from "./Logo.module.scss";

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link href="#hero">
        <Image className={cn(styles.logo__image, className)} src={ImageLogo} alt="Feniks travel's logo" height={80} />
      </Link>
    </div>
  );
};
