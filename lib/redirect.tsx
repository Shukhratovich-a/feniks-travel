import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  const href = to || router.asPath;

  useEffect(() => {
    const detectedLng = languageDetector.detect() as string;
    if (href.startsWith("/" + detectedLng) && router.route === "/404") {
      router.replace("/" + detectedLng + router.route);
      return;
    }

    if (!languageDetector.cache) return;
    languageDetector.cache(detectedLng);
    router.replace("/" + detectedLng + href);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

export const getRedirect = (to: string) => {
  // eslint-disable-next-line react/display-name
  return () => {
    useRedirect(to);
    return <></>;
  };
};
