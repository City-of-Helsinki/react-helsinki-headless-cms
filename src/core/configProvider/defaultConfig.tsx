import React from 'react';

import type { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { LanguageCodeEnum } from '../../common/headlessService/types';
import getIsValidHttpUrl from '../../common/utils/getIsValidHttpUrl';
import {
  getArticlePageCardProps,
  getEventCardProps,
  getLocationCardProps,
} from '../pageContent/utils';
import type { Config } from './configContext';
import { FALLBACK_TRANSLATIONS } from '../translation/constants';

export const defaultConfig: Config = {
  siteName: 'Test site',
  // get internal URL origins from environment variables in the client app
  internalHrefOrigins: [],
  currentLanguageCode: LanguageCodeEnum.Fi,
  fallbackImageUrls: [
    './images/event_placeholder_A.jpg',
    './images/event_placeholder_B.jpg',
    './images/event_placeholder_C.jpg',
    './images/event_placeholder_D.jpg',
  ],
  organisationPrefixes: [],
  // Here are the fallback translations for English/Finnish/Swedish:
  fallbackTranslations: FALLBACK_TRANSLATIONS,
  // Here are the current language's translations:
  // FIXME: "copy" should be renamed for clarity
  copy: {
    breadcrumbNavigationLabel: 'Breadcrumb navigation',
    breadcrumbListLabel: 'breadcrumbs',
    menuButtonLabel: 'Menu',
    menuToggleAriaLabel: 'toggle menu',
    skipToContentLabel: 'skip to content',
    openInExternalDomainAriaLabel: 'Opens a different website.',
    openInNewTabAriaLabel: 'Opens in a new tab.',
    closeButtonLabelText: 'close',
    loadMoreButtonLabelText: 'Load more',
    showAllText: 'Show all',
    next: 'Next',
    previous: 'Previous',
    archiveSearch: {
      title: 'Articles search',
      searchTextPlaceholder: 'Search text',
      searchButtonLabelText: 'Search',
      loadMoreButtonLabelText: 'Load more',
      noResultsTitle: 'No results found',
      noResultsText: 'Please try to search something else',
      clearAll: 'Clear filters',
    },
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
  utils: {
    getArticlePageCardProps,
    getEventCardProps,
    getLocationCardProps,
    getIsHrefExternal: (href: string) => {
      if (!window) {
        throw Error(
          'The default getIsLinkExternal implementation does not support server side rendering. Provide your custom implementation.',
        );
      }

      const isUrl = getIsValidHttpUrl(href);

      if (isUrl) {
        return new URL(href).origin !== window.location.origin;
      }

      return false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRoutedInternalHref: (link: string, _type: ModuleItemTypeEnum): string =>
      link ?? '#',
    redirectToUrl: (url: string) => {
      if (url && window) {
        window.location.href = url;
      }
      return null;
    },
  },
  meta: {
    appleTouchIconUrl: 'apple-touch-icon.png',
    favIconUrl: '/favicon.ico',
    favIconSvgUrl: '/favicon.svg',
    manifestUrl: '/manifest.webmanifest',
  },
  htmlSanitizer: {
    allowedUnsafeTags: [],
    trustedOrigins: [],
  },
};
