import { FC } from "react";
// import { GetStaticProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import { ITour } from "@/interfaces/tour.interface";
// import { IDestination } from "@/interfaces/destination.interface";

import { withLayout } from "@/layout/Layout";

import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

import { HomeView } from "@/views";

const HomePage: FC<HomePageProps> = () => {
  return <HomeView tours={tours} destinations={destinations} />;
};

const getStaticProps = makeStaticProps(["common", "nav", "hero", "tours", "destinations", "about", "contacts"]);
export { getStaticPaths, getStaticProps };

export default withLayout(HomePage);

interface HomePageProps extends Record<string, unknown> {}
