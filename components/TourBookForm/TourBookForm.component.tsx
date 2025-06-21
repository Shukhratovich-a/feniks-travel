import { FC } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { TourBookFormProps } from "./TourBookForm.props";
import { IBookTour } from "./TourBookForm.interface";

import { bookTour } from "@/api/tour.api";

import { Button, Alert } from "@/components";

import styles from "./TourBookForm.module.scss";

export const TourBookForm: FC<TourBookFormProps> = ({ tour }) => {
  const { register, handleSubmit } = useForm<IBookTour>();

  const onSubmit = async (formData: IBookTour) => {
    console.log(formData);
    try {
      const { data } = await bookTour({ ...formData, amount: 100000, tour_id: tour.yuid });

      if (!!data.pay_link) {
        window.open(data.pay_link);
      }
    } catch (error) {}
  };

  return (
    <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
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
