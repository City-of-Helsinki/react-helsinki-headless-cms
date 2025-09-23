import { uniqBy } from 'lodash-es';
import type { BreadcrumbListItem, BreadcrumbProps, KorosType } from 'hds-react';

import type { EventType } from '../../common/eventsService/types';
import type {
  ArticleType,
  PageModule,
  PageType,
} from '../../common/headlessService/types';
import {
  getElementTextContent,
  isArticleType,
  isEventSearch,
  isEventSearchCarousel,
  isEventSelected,
  isEventSelectedCarousel,
  isLocationsSelected,
  isLocationsSelectedCarousel,
  isEventType,
  isLayoutArticle,
  isLayoutArticleCarousel,
  isLayoutPage,
  isLayoutPageCarousel,
  isPageType,
  isVenueType,
} from '../../common/headlessService/utils';
import type { VenueType } from '../../common/venuesService/types';
import { DEFAULT_LOCALE } from '../../constants';
import type { CardProps } from '../card/Card';
import { type CollectionProps } from '../collection/Collection';
import type {
  CollectionItemType,
  CollectionType,
  EventSearchCollectionType,
  EventSelectionCollectionType,
  GeneralCollectionType,
  LocationsSelectionCollectionType,
} from '../collection/types';
import type { Breadcrumb as CmsBreadcrumb } from '../../common/headlessService/__generated__';
import type { BreadcrumbUnionType, HeroProps } from './types';

export function getCollections(
  pageModules: PageModule[],
  isEventSearchCollectionsEnables = false,
): CollectionType[] {
  return pageModules?.reduce((collections: CollectionType[], module, index) => {
    const commonFields: GeneralCollectionType = {
      id: index.toString(),
      title:
        module && 'title' in module ? (module.title ?? undefined) : undefined,
      description:
        module && 'description' in module
          ? (module.description ?? undefined)
          : undefined,
      items: [],
      // eslint-disable-next-line no-underscore-dangle
      __typename: module?.__typename,
    };

    if (isLayoutArticle(module) || isLayoutArticleCarousel(module)) {
      const articles: CollectionItemType[] =
        module.articles
          ?.filter((item) => !!item)
          .map((article) => ({
            ...article,
            categories: article.categories
              ? {
                  // eslint-disable-next-line no-underscore-dangle
                  __typename: article.categories.__typename,
                  edges: article.categories.nodes.map((node) => ({
                    __typename: 'PostToCategoryConnectionEdge',
                    node: { ...node, id: node.name || '' },
                  })),
                }
              : null,
          })) ?? [];
      collections.push({
        ...commonFields,
        items: articles,
        showAllUrl: module.showAllLink ?? undefined,
      });
    }
    if (isLayoutPage(module) || isLayoutPageCarousel(module)) {
      const pages: CollectionItemType[] =
        module.pages?.filter((item) => !!item) ?? [];
      collections.push({
        ...commonFields,
        items: pages,
        showAllUrl: isLayoutPage(module)
          ? (module.showAllLink ?? undefined)
          : undefined,
      });
    }
    if (isEventSearchCollectionsEnables) {
      if (isEventSearch(module) || isEventSearchCarousel(module)) {
        collections.push({
          ...commonFields,
          url: module.url,
          showAllUrl: module.showAllLinkCustom,
        } as EventSearchCollectionType);
      }
      if (isEventSelected(module) || isEventSelectedCarousel(module)) {
        collections.push({
          ...commonFields,
          events: module.events,
        } as EventSelectionCollectionType);
      }
      if (isLocationsSelected(module) || isLocationsSelectedCarousel(module)) {
        collections.push({
          ...commonFields,
          venues: module.locations,
        } as LocationsSelectionCollectionType);
      }
    }
    return collections;
  }, []);
}

export function getArticlePageCardProps(
  item: ArticleType | PageType,
): CardProps {
  return {
    id: item?.id,
    title: item?.title ?? undefined,
    url: item?.link ?? '#',
    imageUrl: item?.featuredImage?.node?.medium,
    ariaLabel: item?.title ?? '',
    text: getElementTextContent(item?.lead || item?.content || '' || ''),
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive',
    openLinkInNewTab: false,
  };
}

export function getEventCardProps(
  item: EventType,
  organisationPrefixes: string[],
  locale: string = DEFAULT_LOCALE,
): CardProps {
  const image = item.images.length > 0 ? item.images[0] : null;
  const name =
    item.name[locale.toLowerCase() as keyof typeof item.name] ??
    item.name[DEFAULT_LOCALE] ??
    undefined;
  return {
    id: item.id,
    title: name,
    url: item.internalId ?? undefined,
    imageUrl: image?.url,
    ariaLabel: name,
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive',
    openLinkInNewTab: false,
    withTitleIcon: organisationPrefixes.includes(
      item?.publisher?.split(':')[0] ?? '',
    ),
  };
}

export function getLocationCardProps(item: VenueType): CardProps {
  return {
    id: item.id,
    title: item.name ?? '',
    url: item.id.split(':')[1],
    imageUrl: item.image,
    ariaLabel: item?.name ?? '',
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive',
    openLinkInNewTab: false,
    withTitleIcon:
      item.providerType === 'SELF_PRODUCED' &&
      item.displayedServiceOwnerType === 'MUNICIPAL_SERVICE',
  };
}

export function getCollectionCards(
  collection: GeneralCollectionType,
  organisationPrefixes: string[],
  locale: string = DEFAULT_LOCALE,
): CardProps[] {
  return collection.items.reduce((result: CardProps[], item) => {
    if (isPageType(item) || isArticleType(item))
      result.push(getArticlePageCardProps(item));
    else if (isEventType(item))
      result.push(getEventCardProps(item, organisationPrefixes, locale));
    else if (isVenueType(item)) result.push(getLocationCardProps(item));
    return result;
  }, []);
}

export function getCollectionUIType(
  collection: CollectionType,
): CollectionProps['type'] {
  // eslint-disable-next-line no-underscore-dangle
  return collection.__typename?.includes('Carousel') ? 'carousel' : 'grid';
}

/**
 * Create Breadcrumb list items from the pages' and articles' breadcrumbs.
 * The duplicated root (and other duplicated links) are removed.
 * @param page a page or an article
 * @returns an unique list of breadcrumb list items
 * */
export const getBreadcrumbsFromPage = (
  page: PageType | ArticleType,
): BreadcrumbListItem[] =>
  uniqBy(
    page?.breadcrumbs?.map((breadcrumb) => ({
      title: breadcrumb?.title ?? '',
      path: breadcrumb?.uri ?? '',
    })),
    'path',
  );

export function isHdsBreadcrumb(
  item: BreadcrumbUnionType,
): item is BreadcrumbProps {
  return (
    typeof item === 'object' &&
    item !== null &&
    'ariaLabel' in item &&
    'list' in item &&
    Boolean(item.ariaLabel && item.list)
  );
}

export function isHdsBreadcrumbListItem(
  item: unknown,
): item is BreadcrumbListItem {
  return (
    typeof item === 'object' &&
    item !== null &&
    'path' in item &&
    'title' in item &&
    Boolean(item.path && item.title)
  );
}

export function isCmsBreadcrumb(item: unknown): item is CmsBreadcrumb {
  return (
    typeof item === 'object' &&
    item !== null &&
    'uri' in item &&
    'title' in item &&
    Boolean(item.uri && item.title)
  );
}

export function getHeroProps(page: PageType | ArticleType) {
  const heroProps: HeroProps = {};
  if (page && isPageType(page)) {
    heroProps.title = page.hero?.title || '';
    heroProps.description = page.hero?.description ?? '';
    heroProps.backgroundColor = page.hero?.background_color ?? undefined;
    heroProps.korosType = (page.hero?.wave_motif as KorosType) || 'basic';
    heroProps.actionUrl = page.hero?.link?.url ?? undefined;
    heroProps.actionUrlTarget = page.hero?.link?.target ?? undefined;
    heroProps.actionText = page.hero?.link?.title ?? undefined;
    heroProps.isPageType = true;
  }
  return heroProps;
}

export function disableBreadcrumbsLastLink(breadcrumbs: BreadcrumbListItem[]) {
  const lastItem = breadcrumbs.pop();
  breadcrumbs.push({ ...lastItem, title: lastItem?.title ?? '', path: null });
  return breadcrumbs;
}

export function getBreadcrumbListItems(
  breadcrumbs: BreadcrumbUnionType,
  forceLastItemWithoutLink = true,
): BreadcrumbListItem[] {
  const getListItems = () => {
    if (isHdsBreadcrumb(breadcrumbs)) {
      return [
        ...breadcrumbs.list.map((item) => ({
          ...item,
          title: item.title ?? '',
        })),
      ];
    }
    return breadcrumbs.map((breadcrumb: BreadcrumbListItem | CmsBreadcrumb) => {
      if (isHdsBreadcrumbListItem(breadcrumb))
        return { ...breadcrumb, title: breadcrumb.title ?? '' };
      return {
        ...breadcrumb,
        title: breadcrumb.title ?? '',
        path: breadcrumb.uri ?? '',
      };
    });
  };
  return forceLastItemWithoutLink
    ? disableBreadcrumbsLastLink(getListItems())
    : getListItems();
}
