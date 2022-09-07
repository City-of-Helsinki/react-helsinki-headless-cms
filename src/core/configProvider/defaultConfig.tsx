import React from 'react';

import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import { LanguageCodeEnum } from '../../common/headlessService/types';
import getIsValidHttpUrl from '../../common/utils/getIsValidHttpUrl';
import { Config } from './configContext';

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
  copy: {
    breadcrumbNavigationLabel: 'Breadcrumb navigation',
    breadcrumbListLabel: 'breadcrumbs',
    menuToggleAriaLabel: 'toggle menu',
    skipToContentLabel: 'skip to content',
    openInExternalDomainAriaLabel: 'Opens a different website.',
    openInNewTabAriaLabel: 'Opens in a new tab.',
    closeButtonLabelText: 'close',
    loadMoreButtonLabelText: 'Load more',
    showAllText: 'Show all',
    archiveSearch: {
      searchTextPlaceholder: 'Search text',
      searchButtonLabelText: 'Search',
      loadMoreButtonLabelText: 'Load more',
      noResultsText: 'No results',
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
    // implement when headless cms api is ready
    getShowAllUrl: () => '/',
  },
};
