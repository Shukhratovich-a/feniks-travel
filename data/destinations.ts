import { IDestination } from "@/interfaces/destination.interface";

import TurkeyImage from "@/images/destinations/turkey.jpg";
import UaeImage from "@/images/destinations/uae.jpg";
import VietnamImage from "@/images/destinations/vietnam.jpg";
import EgyptImage from "@/images/destinations/egypt.jpg";
import ThailandImage from "@/images/destinations/thailand.jpg";
import GeorgiaImage from "@/images/destinations/georgia.jpg";

export const destinations: IDestination[] = [
  {
    id: 1,
    yuid: "1",
    title: "turkey",
    image: TurkeyImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
  {
    id: 2,
    yuid: "2",
    title: "uae",
    image: UaeImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
  {
    id: 3,
    yuid: "3",
    title: "vietnam",
    image: VietnamImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
  {
    id: 4,
    yuid: "4",
    title: "egypt",
    image: EgyptImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
  {
    id: 5,
    yuid: "5",
    title: "thailand",
    image: ThailandImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
  {
    id: 6,
    yuid: "6",
    title: "georgia",
    image: GeorgiaImage,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
];
