import { FC } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ITour } from "@/interfaces/tour.interface";
import { IDestination } from "@/interfaces/destination.interface";

import { withLayout } from "@/layout/Layout";

import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

import { HomeView } from "@/views";

const HomePage: FC<HomePageProps> = ({ tours, destinations }) => {
  return <HomeView tours={tours} destinations={destinations} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
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
