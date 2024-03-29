import { IDestination } from "./destination.interface";

export interface ITour {
  id: number;

  title: string;

  image: string;

  destination: IDestination;

  rating: number;

  days: number;

  nights?: number;

  price: number;

  yuid: string;

  created_at: string;

  updated_at: string;
}
