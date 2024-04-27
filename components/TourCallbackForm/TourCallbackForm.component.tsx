import { FC } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { TourCallbackFormProps } from "./TourCallbackForm.props";
import { ICallbackTour } from "./TourCallbackForm.interface";

import { callbackTour } from "@/api/tour.api";

import { Button } from "@/components";

import styles from "./TourCallbackForm.module.scss";

export const TourCallbackForm: FC<TourCallbackFormProps> = () => {
  const { register, handleSubmit } = useForm<ICallbackTour>();

  const bookSubmit = async (formData: ICallbackTour) => {
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
