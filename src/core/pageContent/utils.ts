import { EventType } from '../../common/eventsService/types';
import {
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
import { VenueType } from '../../common/venuesService/types';
import { DEFAULT_LOCALE } from '../../constants';
import { CardProps } from '../card/Card';
import { type CollectionProps } from '../collection/Collection';
import {
  CollectionType,
  EventSearchCollectionType,
  EventSelectionCollectionType,
  GeneralCollectionType,
  LocationsSelectionCollectionType,
} from '../collection/types';

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
    imageUrl: item.featuredImage?.node?.mediaItemUrl,
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
  locale = DEFAULT_LOCALE,
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
  };
}

export function getCollectionCards(
  collection: GeneralCollectionType,
  locale = DEFAULT_LOCALE,
): CardProps[] {
  return collection.items.reduce((result: CardProps[], item) => {
    if (isPageType(item) || isArticleType(item))
      result.push(getArticlePageCardProps(item));
    else if (isEventType(item)) result.push(getEventCardProps(item, locale));
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
