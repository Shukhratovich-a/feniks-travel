import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import i18nextConfig from "../next-i18next.config";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getI18nProps = async (ctx: GetStaticPropsContext, ns?: string[]) => {
  const locale = ctx?.params?.locale;

  let props = {
    ...(await serverSideTranslations(String(locale), ns || ["common"])),
  };

  return props;
};

export const makeStaticProps = <T>(ns: string[] = []) => {
  return async function getStaticProps(ctx: GetStaticPropsContext): Promise<GetStaticPropsResult<T>> {
    return {
      props: await (<T>getI18nProps(ctx, ns)),
    };
  };
};
