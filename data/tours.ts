import { ITour } from "@/interfaces/tour.interface";

import TurkeyImage from "@/images/destinations/turkey.jpg";
import UaeImage from "@/images/destinations/uae.jpg";
import VietnamImage from "@/images/destinations/vietnam.jpg";
import EgyptImage from "@/images/destinations/egypt.jpg";
import ThailandImage from "@/images/destinations/thailand.jpg";
import GeorgiaImage from "@/images/destinations/georgia.jpg";

export const tours: ITour[] = [
  {
    id: 1,
    yuid: "1",
    title: "Tour - Istanbul, Turkey",
    image: TurkeyImage,
    destination: {
      id: 1,
      yuid: "1",
      title: "turkey",
      image: TurkeyImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 7,
    nights: 6,
    price: 550,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },

  {
    id: 2,
    yuid: "2",
    title: "Tour - UAE, Dubai",
    image: UaeImage,
    destination: {
      id: 1,
      yuid: "2",
      title: "uae",
      image: UaeImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 4,
    nights: 5,
    price: 490,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },

  {
    id: 3,
    yuid: "3",
    title: "Tour - Vietnam",
    image: VietnamImage,
    destination: {
      id: 1,
      yuid: "3",
      title: "vietnam",
      image: VietnamImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 13,
    nights: 12,
    price: 760,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },

  {
    id: 4,
    yuid: "4",
    title: "Tour - Egypt. Sharm el-Sheikh",
    image: EgyptImage,
    destination: {
      id: 1,
      yuid: "4",
      title: "Egypt",
      image: EgyptImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 6,
    nights: 5,
    price: 350,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },

  {
    id: 5,
    yuid: "5",
    title: "Tour - Thailand, Phuket",
    image: ThailandImage,
    destination: {
      id: 1,
      yuid: "5",
      title: "thailand",
      image: ThailandImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 11,
    nights: 10,
    price: 830,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },

  {
    id: 6,
    yuid: "6",
    title: "Tour - Georgia, Kombi",
    image: GeorgiaImage,
    destination: {
      id: 1,
      yuid: "6",
      title: "georgia",
      image: GeorgiaImage,
      created_at: Date.now().toString(),
      updated_at: Date.now().toString(),
    },
    rating: 5,
    days: 8,
    nights: 7,
    price: 499,
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  },
];
