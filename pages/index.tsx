import { FC } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ITour } from "@/interfaces/tour.interface";
import { IDestination } from "@/interfaces/destination.interface";

import { withLayout } from "@/layout/Layout";

import { HomeView } from "@/views";

import TourImage from "@/images/hero-background.jpg";

const HomePage: FC<HomePageProps> = ({ tours, destinations }) => {
  return <HomeView tours={tours} destinations={destinations} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  const tours: ITour[] = [
    {
      id: 1,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 5,
      duration: 7,
      price: 180,
    },
    {
      id: 2,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 3,
      duration: 7,
      price: 180,
    },
    {
      id: 3,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 5,
      duration: 7,
      price: 180,
    },
    {
      id: 4,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 5,
      duration: 7,
      price: 180,
    },
    {
      id: 5,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 4,
      duration: 7,
      price: 180,
    },
    {
      id: 6,
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      image: TourImage,
      destination: {
        id: 1,
        title: "Egypt",
        image: TourImage,
      },
      rating: 5,
      duration: 7,
      price: 180,
    },
  ];

  const destinations = [
    {
      id: 1,
      title: "Egypt",
      image: TourImage,
    },
    {
      id: 2,
      title: "Egypt",
      image: TourImage,
    },
    {
      id: 3,
      title: "Egypt",
      image: TourImage,
    },
    {
      id: 4,
      title: "Egypt",
      image: TourImage,
    },
    {
      id: 5,
      title: "Egypt",
      image: TourImage,
    },
    {
      id: 6,
      title: "Egypt",
      image: TourImage,
    },
  ];

  return {
    props: {
      tours,
      destinations,
      ...(await serverSideTranslations(String(locale))),
    },
  };
};

export default withLayout(HomePage);

interface HomePageProps extends Record<string, unknown> {
  tours: ITour[];
  destinations: IDestination[];
}
