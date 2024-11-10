import type React from 'react';
import { createContext } from 'react';
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import type { ButtonTheme, ButtonVariant } from 'hds-react';

import type {
  ArticleType,
  LanguageCodeEnum,
  PageType,
} from '../../common/headlessService/types';
import type { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import type { EventType } from '../../common/eventsService/types';
import type { VenueType } from '../../common/venuesService/types';
import type { CardProps } from '../card/Card';
import type { HtmlToReactProps } from '../../common/components/htmlToReact/HtmlToReact';
import type {
  FallbackTranslations,
  OptionalTranslationsWithFallbacks,
} from '../translation/types';

export type Config = {
  /**
   * Site or App name.
   */
  siteName: string;
  /**
   * Id of the html element where SkipTo link will point.
   */
  mainContentId?: string;
  /**
   * Internal origins for generating correct urls for app routing.
   */
  internalHrefOrigins: string[];
  /**
   * List of organizations for additional UI highlights (f.e. check icon after title if its Helsinki specific item).
   */
  organisationPrefixes: string[];
  /**
   * Current language code of the app.
   */
  currentLanguageCode: LanguageCodeEnum;
  /**
   * Fallback image urls. Used if image is not defined, but imaage is still required in the component.
   */
  fallbackImageUrls: string[];
  /**
   * Fallback translations.
   */
  fallbackTranslations: FallbackTranslations;
  /**
   * Translated texts which are needed to render components properly.
   */
  copy: {
    breadcrumbNavigationLabel: string;
    breadcrumbListLabel: string;
    menuButtonLabel: string;
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
  } & OptionalTranslationsWithFallbacks;
  /**
   * Custom translated texts which are needed to render components properly.
   * Used when for technical reasons the use of the copy property is not possible.
   */
  customCopy?: {
    loadMoreButtonVariant?: Exclude<ButtonVariant, 'supplementary'>;
    loadMoreButtonTheme?: ButtonTheme;
  };
  /**
   * React component replacements for defined html elements.
   */
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
    HelsinkiCityOwnedIcon?: React.FC<Record<string, unknown>>;
  };
  /**
   * Apollo client to make gql calls to headless cms.
   */
  apolloClient?: ApolloClient<NormalizedCacheObject>;
  /**
   * Apollo client to make gql calls to linked events.
   */
  eventsApolloClient?: ApolloClient<NormalizedCacheObject> | 'disabled';
  /**
   * Apollo client to make gql calls to venues search.
   */
  venuesApolloClient?: ApolloClient<NormalizedCacheObject> | 'disabled';
  /**
   * Utilities custom implementation provided by apps (app specific).
   */
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
    redirectToArticlesSearch?: (tag: string) => void;
  };
  /**
   * Meta data for the Head components.
   */
  meta?: {
    appleTouchIconUrl?: string;
    favIconUrl?: string;
    favIconSvgUrl?: string;
    manifestUrl?: string;
  };
  /**
   * App specific html sanitising configs for html editors.
   */
  htmlSanitizer: {
    allowedUnsafeTags: HtmlToReactProps['allowedUnsafeTags'];
    trustedOrigins: HtmlToReactProps['trustedOrigins'];
  };
};

export const configContext = createContext<Config>({} as Config);
