import { PageModule } from '../../common/headlessService/types';
import {
  getElementTextContent,
  isEventSearch,
  isEventSearchCarousel,
  isEventSelected,
  isEventSelectedCarousel,
  isLayoutArticle,
  isLayoutArticleCarousel,
  isLayoutPage,
  isLayoutPageCarousel,
} from '../../common/headlessService/utils';
import { CardProps } from '../card/Card';
import { CollectionProps } from '../collection/Collection';
import { CollectionType } from '../collection/types';

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
      collections.push(commonFields);
    }
    if (isEventSelected(module) || isEventSelectedCarousel(module)) {
      // TODO: Fetch evenst with eventIds
      collections.push({
        ...commonFields,
        items: module.events.map((eventId) => ({ title: eventId })),
      });
    }
    return collections;
  }, []);
}

export function getCollectionCards(
  collection: CollectionType,
  defaultImageUrl?: string,
): CardProps[] {
  const cards = collection.items.map((item) => ({
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
  }));
  return cards;
}

export function getCollectionUIType(
  collection: CollectionType,
): CollectionProps['type'] {
  // eslint-disable-next-line no-underscore-dangle
  return collection.__typename.includes('Carousel') ? 'carousel' : 'grid';
}
