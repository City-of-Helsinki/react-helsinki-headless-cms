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
  return pageModules?.reduce((collections, module, index) => {
    const commonFields: CollectionType = {
      id: index.toString(),
      title: 'title' in module ? module.title : null,
      description: 'description' in module ? module.description : null,
      items: [],
      // eslint-disable-next-line no-underscore-dangle
      __typename: module.__typename,
    };

    if (isLayoutArticle(module) || isLayoutArticleCarousel(module)) {
      collections.push({
        ...commonFields,
        items: module.articles,
        showAllUrl: module.showAllLink,
      });
    }
    if (isLayoutPage(module) || isLayoutPageCarousel(module)) {
      collections.push({
        ...commonFields,
        items: module.pages,
        showAllUrl: isLayoutPage(module) ? module.showAllLink : '',
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
    id: item.id,
    title: item.title,
    url: item.link,
    imageUrl: item.featuredImage?.node?.medium,
    ariaLabel: item.title,
    text: getElementTextContent((item.lead || item.content) ?? ''),
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive' as CardProps['direction'],
    openLinkInNewTab: false,
  };
}

export function getEventCardProps(
  item: EventType,
  organisationPrefixes: string[],
  locale: string = DEFAULT_LOCALE,
): CardProps {
  const image = item.images.length > 0 ? item.images[0] : null;
  const name = item.name[locale.toLowerCase()] ?? item.name[DEFAULT_LOCALE];
  return {
    id: item.id,
    title: name,
    url: item.internalId,
    imageUrl: image?.url,
    ariaLabel: name,
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive' as CardProps['direction'],
    openLinkInNewTab: false,
    withTitleIcon: organisationPrefixes.includes(
      item?.publisher?.split(':')[0] ?? '',
    ),
  };
}

export function getLocationCardProps(item: VenueType): CardProps {
  return {
    id: item.id,
    title: item.name,
    url: item.id.split(':')[1],
    imageUrl: item.image,
    ariaLabel: item.name,
    hasLink: true,
    withBorder: true,
    withShadow: false,
    clampText: true,
    direction: 'responsive' as CardProps['direction'],
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
  return collection.__typename.includes('Carousel') ? 'carousel' : 'grid';
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
    page.breadcrumbs.map((breadcrumb) => ({
      title: breadcrumb.title,
      path: breadcrumb.uri,
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
  if (isPageType(page)) {
    heroProps.title = page.hero?.title || '';
    heroProps.description = page.hero?.description;
    heroProps.backgroundColor = page.hero?.background_color;
    heroProps.korosType = (page.hero?.wave_motif as KorosType) || 'basic';
    heroProps.actionUrl = page.hero?.link.url;
    heroProps.actionUrlTarget = page.hero?.link.target;
    heroProps.actionText = page.hero?.link?.title;
    heroProps.isPageType = true;
  }
  return heroProps;
}

export function disableBreadcrumbsLastLink(breadcrumbs: BreadcrumbListItem[]) {
  const lastItem = breadcrumbs.pop();
  breadcrumbs.push({ ...lastItem, path: null });
  return breadcrumbs;
}

export function getBreadcrumbListItems(
  breadcrumbs: BreadcrumbUnionType,
  forceLastItemWithoutLink = true,
): BreadcrumbListItem[] {
  const getListItems = () => {
    if (isHdsBreadcrumb(breadcrumbs)) {
      return breadcrumbs.list;
    }
    return breadcrumbs.map((breadcrumb: BreadcrumbListItem | CmsBreadcrumb) => {
      if (isHdsBreadcrumbListItem(breadcrumb)) return breadcrumb;
      return { title: breadcrumb.title, path: breadcrumb.uri };
    });
  };
  return forceLastItemWithoutLink
    ? disableBreadcrumbsLastLink(getListItems())
    : getListItems();
}
