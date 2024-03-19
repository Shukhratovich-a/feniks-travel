import TurkeyImage from "@/images/destinations/turkey.jpg";
import UaeImage from "@/images/destinations/uae.jpg";
import VietnamImage from "@/images/destinations/vietnam.jpg";
import EgyptImage from "@/images/destinations/egypt.jpg";
import ThailandImage from "@/images/destinations/thailand.jpg";
import GeorgiaImage from "@/images/destinations/georgia.jpg";

export const tours = [
  {
    id: 1,
    title: "Tour - Istanbul, Turkey",
    image: TurkeyImage,
    destination: {
      id: 1,
      title: "turkey",
      image: TurkeyImage,
    },
    rating: 5,
    duration: {
      days: 7,
      nights: 6,
    },
    price: 550,
  },

  {
    id: 2,
    title: "Tour - UAE, Dubai",
    image: UaeImage,
    destination: {
      id: 1,
      title: "uae",
      image: UaeImage,
    },
    rating: 5,
    duration: {
      days: 4,
      nights: 5,
    },
    price: 490,
  },

  {
    id: 3,
    title: "Tour - Vietnam",
    image: VietnamImage,
    destination: {
      id: 1,
      title: "vietnam",
      image: VietnamImage,
    },
    rating: 5,
    duration: {
      days: 13,
      nights: 12,
    },
    price: 760,
  },

  {
    id: 4,
    title: "Tour - Egypt. Sharm el-Sheikh",
    image: EgyptImage,
    destination: {
      id: 1,
      title: "Egypt",
      image: EgyptImage,
    },
    rating: 5,
    duration: {
      days: 6,
      nights: 5,
    },
    price: 350,
  },

  {
    id: 5,
    title: "Tour - Thailand, Phuket",
    image: ThailandImage,
    destination: {
      id: 1,
      title: "thailand",
      image: ThailandImage,
    },
    rating: 5,
    duration: {
      days: 11,
      nights: 10,
    },
    price: 830,
  },

  {
    id: 6,
    title: "Tour - Georgia, Kombi",
    image: GeorgiaImage,
    destination: {
      id: 1,
      title: "georgia",
      image: GeorgiaImage,
    },
    rating: 5,
    duration: {
      days: 8,
      nights: 7,
    },
    price: 499,
  },
];
