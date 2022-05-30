import React, { createContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { LanguageCodeEnum } from "../../common/headlessService/types";

export type Config = {
  siteName: string;
  internalHrefOrigins: string[];
  currentLanguageCode: LanguageCodeEnum;
  copy: {
    breadcrumbNavigationLabel: string;
    breadcrumbListLabel: string;
    menuToggleAriaLabel: string;
    skipToContentLabel: string;
    openInExternalDomainAriaLabel: string;
    openInNewTabAriaLabel: string;
    closeButtonLabelText: string;
  };
  components: {
    A: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;
    Img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
    Link?: (
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>
    ) => JSX.Element;
    Head?: (props: { children: React.ReactNode }) => JSX.Element;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  utils: {
    getIsHrefExternal: (href: string) => boolean;
  };
  archiveSearch?: {
    searchTextPlaceholder: string;
    searchButtonLabelText: string;
    loadMoreButtonLabelText: string;
    noResultsText: string;
  };
};

const configContext = createContext<Config>({} as Config);

export default configContext;
