import { IDestination } from "./destination.interface";

export interface ITour {
  id: number;

  title: string;

  image: string;

  destination: IDestination;

  rating: number;

  duration: number;

  price: number;

  // createAt: Date;

  // updateAt: Date;
}
