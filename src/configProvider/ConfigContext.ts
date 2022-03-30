import React, { createContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { LanguageCodeEnum } from "../common/headlessService/types";

export type Config = {
  siteName: string;
  currentLanguageCode: LanguageCodeEnum;
  copy: {
    externalLink: string;
    breadcrumbNavigationLabel: string;
    breadcrumbListLabel: string;
    menuToggleAriaLabel: string;
    skipToContentLabel: string;
    openInExternalDomainAriaLabel: string;
    openInNewTabAriaLabel: string;
  };
  components: {
    A: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;
    Img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
    Link?: (
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>
    ) => JSX.Element;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  utils: {
    getIsHrefExternal: (href: string) => boolean;
  };
};

const configContext = createContext<Config>({} as Config);

export default configContext;
