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
  isEventType,
  isLayoutArticle,
  isLayoutArticleCarousel,
  isLayoutPage,
  isLayoutPageCarousel,
  isPageType,
} from '../../common/headlessService/utils';
import { CardProps } from '../card/Card';
import { CollectionProps } from '../collection/Collection';
import { CollectionType } from '../collection/types';

const createEvent = (eventId) =>
  ({
    id: eventId,
    internalId: `https://api.hel.fi/linkedevents/v1/event/${eventId}`,
    name: { fi: eventId },
    description: { fi: `description-${eventId}` },
    shortDescription: { fi: `shortDescription-${eventId}` },
    externalLinks: [],
    images: [],
    subEvents: [],
    keywords: [],
    offers: [],
    audience: [],
    __typename: 'EventDetails',
  } as EventType);

export function getCollections(pageModules: PageModule[]): CollectionType[] {
  return pageModules?.reduce((collections, module, index) => {
    const commonFields: CollectionType = {
      id: index.toString(),
      title: 'title' in module ? module.title : undefined,
      description: 'description' in module ? module.description : undefined,
      items: [],
      // eslint-disable-next-line no-underscore-dangle
      __typename: module.__typename,
    };

    if (isLayoutArticle(module) || isLayoutArticleCarousel(module)) {
      collections.push({
        ...commonFields,
        items: module.articles,
      });
    }
    if (isLayoutPage(module) || isLayoutPageCarousel(module)) {
      collections.push({
        ...commonFields,
        items: module.pages,
      });
    }
    if (isEventSearch(module) || isEventSearchCarousel(module)) {
      // TODO: Fetch evenst with URL-field
      collections.push({
        ...commonFields,
        items: [
          createEvent('asdf:123'),
          createEvent('zxcv:234'),
          createEvent('xcvb:345'),
        ],
      });
    }
    if (isEventSelected(module) || isEventSelectedCarousel(module)) {
      // TODO: Fetch evenst with eventIds
      const eventItems = module.events.map(createEvent);
      collections.push({
        ...commonFields,
        items: eventItems,
      });
    }
    return collections;
  }, []);
}

export function getArticlePageCardProps(
  item: ArticleType | PageType,
  defaultImageUrl?: string,
): CardProps {
  return {
    id: item.id,
    title: item.title,
    url: item.link,
    imageUrl: item.featuredImage?.node?.mediaItemUrl || defaultImageUrl,
    ariaLabel: item.title,
    imageLabel: item.featuredImage?.node?.title,
    text: getElementTextContent((item.lead || item.content) ?? ''),
    hasLink: true,
    withBorder: false,
    withShadow: true,
    clampText: true,
    direction: 'responsive' as CardProps['direction'],
    target: '_self' as CardProps['target'],
  };
}

export function getEventCardProps(
  item: EventType,
  defaultImageUrl?: string,
  locale = 'fi',
): CardProps {
  const image = item.images.length > 0 ? item.images[0] : null;
  return {
    id: item.id,
    title: item.name[locale],
    url: item.internalId,
    imageUrl: image?.url || defaultImageUrl,
    ariaLabel: item.name[locale],
    imageLabel: image?.name,
    text: item.shortDescription?.[locale] ?? item.description?.[locale] ?? '',
    hasLink: true,
    withBorder: false,
    withShadow: true,
    clampText: true,
    direction: 'responsive' as CardProps['direction'],
    target: '_self' as CardProps['target'],
  };
}

export function getCollectionCards(
  collection: CollectionType,
  defaultImageUrl?: string,
  locale = 'fi',
): CardProps[] {
  return collection.items.reduce((result: CardProps[], item) => {
    if (isPageType(item) || isArticleType(item))
      result.push(getArticlePageCardProps(item, defaultImageUrl));
    else if (isEventType(item))
      result.push(getEventCardProps(item, defaultImageUrl, locale));

    return result;
  }, []);
}

export function getCollectionUIType(
  collection: CollectionType,
): CollectionProps['type'] {
  // eslint-disable-next-line no-underscore-dangle
  return collection.__typename.includes('Carousel') ? 'carousel' : 'grid';
}
