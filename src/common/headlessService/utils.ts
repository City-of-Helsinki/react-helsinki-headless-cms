import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

import { CollectionItemType } from '../../core/collection/types';
import {
  ArticleType,
  LayoutArticle,
  LayoutLinkList,
  LayoutPage,
  LayoutPageCarousel,
  LayoutArticleCarousel,
  PageModule,
  PageSidebarModule,
  PageType,
  EventSearch,
  EventSearchCarousel,
  EventSelected,
  EventSelectedCarousel,
} from './types';

export function isLayoutArticle(
  module: PageModule | PageSidebarModule,
): module is LayoutArticle {
  return (
    (<LayoutArticle>module).articles !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'LayoutArticles'
  );
}

export function isLayoutPage(
  module: PageModule | PageSidebarModule,
): module is LayoutPage {
  return (
    (<LayoutPage>module).pages !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'LayoutPages'
  );
}

export function isLayoutArticleCarousel(
  module: PageModule | PageSidebarModule,
): module is LayoutArticleCarousel {
  return (
    (<LayoutArticleCarousel>module).articles !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'LayoutArticlesCarousel'
  );
}

export function isLayoutPageCarousel(
  module: PageModule | PageSidebarModule,
): module is LayoutPageCarousel {
  return (
    (<LayoutPageCarousel>module).pages !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'LayoutPagesCarousel'
  );
}

export function isEventSearch(
  module: PageModule | PageSidebarModule,
): module is EventSearch {
  return (
    (<EventSearch>module).url !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'EventSearch'
  );
}

export function isEventSearchCarousel(
  module: PageModule | PageSidebarModule,
): module is EventSearchCarousel {
  return (
    (<EventSearchCarousel>module).url !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'EventSearchCarousel'
  );
}

export function isEventSelected(
  module: PageModule | PageSidebarModule,
): module is EventSelected {
  return (
    (<EventSelected>module).events !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'EventSelected'
  );
}

export function isEventSelectedCarousel(
  module: PageModule | PageSidebarModule,
): module is EventSelectedCarousel {
  return (
    (<EventSelectedCarousel>module).events !== undefined &&
    // eslint-disable-next-line no-underscore-dangle
    module.__typename === 'EventSelectedCarousel'
  );
}

export function isLayoutLinkList(
  module: PageModule | PageSidebarModule,
): module is LayoutLinkList {
  return (
    // eslint-disable-next-line no-underscore-dangle
    (<LayoutLinkList>module).__typename === 'LayoutLinkList' ||
    (<LayoutLinkList>module).links !== undefined
  );
}

export function isArticleType(item: CollectionItemType): item is ArticleType {
  return (
    // eslint-disable-next-line no-underscore-dangle
    ((<ArticleType>item).__typename === 'Post' ||
      (<ArticleType>item).categories) !== undefined
  );
}

export function isPageType(item: CollectionItemType): item is PageType {
  return (
    // eslint-disable-next-line no-underscore-dangle
    ((<PageType>item).__typename === 'Page' || (<PageType>item).sidebar) !==
    undefined
  );
}

export function filterPagesAndArticles(items: CollectionItemType[]) {
  return items.filter((item) => isArticleType(item) || isPageType(item));
}

export function getUri(
  link: string,
  internalHrefOrigins: string[],
  getIsHrefExternal: (href: string) => boolean,
) {
  // A valid internal or external URL
  if (getIsHrefExternal(link) || link.startsWith('/')) {
    return link;
  }

  let uri = link;
  // Replace all the internal link origins with empty to make dynamic internal URLs
  internalHrefOrigins.forEach((origin) => {
    uri = uri.replace(origin, '');
  });

  return uri;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
const getNodeText = (node: any): string => {
  if (['string', 'number'].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join('');
  if (typeof node === 'object' && node) return getNodeText(node.props.children);
  return node;
};

export function getElementTextContent(dirty: string): string {
  return getNodeText(parse(DOMPurify.sanitize(dirty)));
}
