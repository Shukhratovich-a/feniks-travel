import { FC } from "react";
import { GetStaticProps } from "next";

import { ITour } from "@/interfaces/tour.interface";
import { IDestination } from "@/interfaces/destination.interface";

import { getList as getToursList } from "@/api/tour.api";
import { getList as getDestinationList } from "@/api/destination.api";

import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

import { withLayout } from "@/layout/Layout";

import { getI18nProps, getStaticPaths } from "@/lib/getStatic";

import { HomeView } from "@/views";

const HomePage: FC<HomePageProps> = ({ tours, destinations }: HomePageProps) => {
  return <HomeView tours={tours} destinations={destinations} />;
};

const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  return {
    props: {
      tours,
      destinations,
      ...(await getI18nProps(context, ["common", "nav", "hero", "tours", "destinations", "about", "contacts"])),
    },
  };
};

export { getStaticPaths, getStaticProps };

export default withLayout(HomePage);

interface HomePageProps extends Record<string, unknown> {
  tours: ITour[];
  destinations: IDestination[];
}
