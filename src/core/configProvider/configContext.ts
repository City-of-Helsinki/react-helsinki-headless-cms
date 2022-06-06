import React, { createContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import { ModuleItemTypeEnum } from "../../common/headlessService/constants";

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
    archiveSearch?: {
      searchTextPlaceholder: string;
      searchButtonLabelText: string;
      loadMoreButtonLabelText: string;
      noResultsText: string;
    };
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
    getRoutedInternalHref: (link: string, type: ModuleItemTypeEnum) => string;
  };
};

const configContext = createContext<Config>({} as Config);

export default configContext;
