import { useState, useEffect } from "react";
import cn from "classnames";

import { RatingProps } from "./Rating.props";

import { IconStar } from "@/icons";

import styles from "./Rating.module.scss";

export const Rating = ({ className, rating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((_, index: number) => {
      return <IconStar className={cn(styles.star, { [styles["star--filled"]]: index < currentRating })} key={index} />;
    });
    setRatingArray(updatedArray);
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {ratingArray.map((rating, index) => (
        <span className={cn(styles.rating)} key={index}>
          {rating}
        </span>
      ))}
    </div>
  );
};
