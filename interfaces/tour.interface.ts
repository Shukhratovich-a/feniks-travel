import { IDestination } from "./destination.interface";

export interface ITour {
  id: number;

  title: string;

  image: string;

  destination: IDestination;

  rating: 1 | 2 | 3 | 4 | 5;

  duration: number;

  price: number;

  // createAt: Date;

  // updateAt: Date;
}
