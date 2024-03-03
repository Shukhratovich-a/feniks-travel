import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { withLayout } from "@/layout/Layout";

import { HomeView } from "@/views";

const HomePage = () => {
  return <HomeView />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale))),
    },
  };
};

export default withLayout(HomePage);
