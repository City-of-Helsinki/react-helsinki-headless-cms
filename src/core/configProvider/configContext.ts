import React, { createContext } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { LanguageCodeEnum } from '../../common/headlessService/types';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';

export type Config = {
  siteName: string;
  internalHrefOrigins: string[];
  currentLanguageCode: LanguageCodeEnum;
  fallbackImageUrls: string[];
  copy: {
    breadcrumbNavigationLabel: string;
    breadcrumbListLabel: string;
    menuToggleAriaLabel: string;
    skipToContentLabel: string;
    openInExternalDomainAriaLabel: string;
    openInNewTabAriaLabel: string;
    closeButtonLabelText: string;
    loadMoreButtonLabelText: string;
    showAllText: string;
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
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ) => JSX.Element;
    Head?: (props: { children: React.ReactNode }) => JSX.Element;
    EventCardContent?: React.FC<Record<string, unknown>>;
    ArticleCardContent?: React.FC<Record<string, unknown>>;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  eventsApolloClient?: ApolloClient<NormalizedCacheObject> | 'disabled';
  utils: {
    getIsHrefExternal: (href: string) => boolean;
    getRoutedInternalHref: (
      link: string | null | undefined,
      type?: ModuleItemTypeEnum,
    ) => string;
    getShowAllUrl: () => string;
  };
};

export const configContext = createContext<Config>({} as Config);
