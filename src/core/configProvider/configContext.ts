import React, { createContext } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  ArticleType,
  LanguageCodeEnum,
  PageType,
} from '../../common/headlessService/types';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { EventType } from '../../common/eventsService/types';
import { VenueType } from '../../common/venuesService/types';
import type { CardProps } from '../card/Card';
import { HtmlToReactProps } from '../../common/components/htmlToReact/HtmlToReact';

export type Config = {
  siteName: string;
  mainContentId?: string;
  internalHrefOrigins: string[];
  organisationPrefixes: string[];
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
    next: string;
    previous: string;
    archiveSearch?: {
      title: string;
      searchTextPlaceholder: string;
      searchButtonLabelText: string;
      loadMoreButtonLabelText: string;
      noResultsTitle: string;
      noResultsText: string;
      clearAll: string;
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
    VenueCardContent?: React.FC<Record<string, unknown>>;
    ArticleCardContent?: React.FC<Record<string, unknown>>;
    CheckMarkIcon?: React.FC<Record<string, unknown>>;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  eventsApolloClient?: ApolloClient<NormalizedCacheObject> | 'disabled';
  venuesApolloClient?: ApolloClient<NormalizedCacheObject> | 'disabled';
  utils: {
    getArticlePageCardProps: (item: ArticleType | PageType) => CardProps;
    getEventCardProps: (
      item: EventType,
      organisationPrefixes: string[],
      locale: string,
    ) => CardProps;
    getLocationCardProps: (item: VenueType) => CardProps;
    getIsHrefExternal: (href: string) => boolean;
    getRoutedInternalHref: (
      link: string | null | undefined,
      type?: ModuleItemTypeEnum,
    ) => string;
    redirectToUrl: (url: string) => void;
  };
  meta?: {
    appleTouchIconUrl?: string;
    favIconUrl?: string;
    favIconSvgUrl?: string;
    manifestUrl?: string;
  };
  htmlSanitizer: {
    allowedUnsafeTags: HtmlToReactProps['allowedUnsafeTags'];
    trustedOrigins: HtmlToReactProps['trustedOrigins'];
  };
};

export const configContext = createContext<Config>({} as Config);
