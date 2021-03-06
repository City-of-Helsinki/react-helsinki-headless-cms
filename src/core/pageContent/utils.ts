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
import { type CollectionProps } from '../collection/Collection';
import {
  CollectionType,
  EventSearchCollectionType,
  EventSelectionCollectionType,
  GeneralCollectionType,
} from '../collection/types';

export function getCollections(
  pageModules: PageModule[],
  isEventSearchCollectionsEnables = false,
): CollectionType[] {
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
    if (isEventSearchCollectionsEnables) {
      if (isEventSearch(module) || isEventSearchCarousel(module)) {
        collections.push({
          ...commonFields,
          url: module.url,
        } as EventSearchCollectionType);
      }
      if (isEventSelected(module) || isEventSelectedCarousel(module)) {
        collections.push({
          ...commonFields,
          events: module.events,
        } as EventSelectionCollectionType);
      }
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
  collection: GeneralCollectionType,
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
