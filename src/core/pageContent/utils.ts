import { PageModule } from '../../common/headlessService/types';
import {
  getElementTextContent,
  isLayoutArticle,
  isLayoutArticleCarousel,
  isLayoutPage,
  isLayoutPageCarousel,
} from '../../common/headlessService/utils';
import { CardProps } from '../card/Card';
import { CollectionProps } from '../collection/Collection';
import { CollectionType } from '../collection/types';

export function getCollections(pageModules: PageModule[]): CollectionType[] {
  return (
    pageModules
      ?.map((module, index) => {
        if (isLayoutArticle(module) || isLayoutArticleCarousel(module)) {
          return {
            id: index.toString(),
            title: module.title,
            items: module.articles,
            // eslint-disable-next-line no-underscore-dangle
            __typename: module.__typename,
          };
        }
        if (isLayoutPage(module) || isLayoutPageCarousel(module)) {
          return {
            id: index.toString(),
            title: module.title,
            description: 'description' in module && module.description,
            items: module.pages,
            // eslint-disable-next-line no-underscore-dangle
            __typename: module.__typename,
          };
        }
        return null;
      })
      .filter((collection) => collection !== null) ?? []
  );
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
