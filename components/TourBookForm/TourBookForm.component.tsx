import { FC } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { TourBookFormProps } from "./TourBookForm.props";
import { IBookTour } from "./TourBookForm.interface";

import { bookTour } from "@/api/tour.api";

import { Button } from "@/components";

import styles from "./TourBookForm.module.scss";

export const TourBookForm: FC<TourBookFormProps> = () => {
  const { register, handleSubmit } = useForm<IBookTour>();

  const bookSubmit = async (formData: IBookTour) => {
    console.log(formData);

    // const { data } = await bookTour({ ...formData, amount: 1000 });
  };

  return (
    <form className={cn(styles.form)} onSubmit={handleSubmit(bookSubmit)}>
      <input
        {...register("name", { required: { value: true, message: "" } })}
        className={cn(styles.input)}
        type="text"
        placeholder="Full name"
      />
      <input
        {...register("phone", { required: { value: true, message: "" } })}
        className={cn(styles.input)}
        type="text"
        placeholder="Phone"
      />

      <Button className={cn(styles.button)}>Submit</Button>
    </form>
  );
};
