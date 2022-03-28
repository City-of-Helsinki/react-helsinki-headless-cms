import React, { createContext, useContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { LanguageCodeEnum } from "../common/headlessService/types";

type Config = {
  siteName: string;
  currentLanguageCode: LanguageCodeEnum;
  copy: {
    externalLink: string;
    breadcrumbNavigationLabel: string;
    breadcrumbListLabel: string;
    menuToggleAriaLabel: string;
    skipToContentLabel: string;
  };
  components: {
    // eslint-disable-next-line no-unused-vars
    A: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;
    // eslint-disable-next-line no-unused-vars
    Img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
};

export const defaultConfig = {
  siteName: "Test site",
  currentLanguageCode: LanguageCodeEnum.Fi,
  copy: {
    externalLink: "opens in a new window",
    breadcrumbNavigationLabel: "Breadcrumb navigation",
    breadcrumbListLabel: "breadcrumbs",
    menuToggleAriaLabel: "toggle menu",
    skipToContentLabel: "skip to content",
  },
  components: {
    A: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a {...props} />
    ),
    Img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img {...props} />
    ),
  },
};
const configContext = createContext<Config>(defaultConfig as Config);

type Props = {
  config: Config;
  children: React.ReactNode;
};

export default function ConfigProvider({
  config: userConfig,
  children,
}: Props) {
  const config = React.useMemo(
    () => ({
      ...defaultConfig,
      ...userConfig,
    }),
    [userConfig]
  );

  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}

export function useConfig() {
  return useContext(configContext);
}
