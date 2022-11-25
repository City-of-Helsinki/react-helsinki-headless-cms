import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import SidebarContent from './sidebarContent/SidebarContent';
import { PageContentLayout } from './PageContentLayout';
import { PageMainContent } from './PageMainContent';
import PageContentBreadcrumbs from './PageContentBreadcrumbs';
import { Breadcrumb } from './types';
import { PageMeta } from './meta/PageMeta';
import {
  Collection,
  EventSearchCollection,
  EventSelectionCollection,
} from '../collection/Collection';
import { ArticleType, PageType } from '../../common/headlessService/types';
import { Card } from '../card/Card';
import {
  getCollections,
  getCollectionCards,
  getCollectionUIType,
} from './utils';
import { ModuleItemTypeEnum } from '../../common/headlessService/constants';
import {
  isEventSearchCollection,
  isEventSelectionCollection,
} from '../../common/headlessService/utils';

export type PageContentProps = {
  page?: PageType | ArticleType;
  breadcrumbs?: Breadcrumb[];
  content?:
    | React.ReactNode
    | ((page: PageType | ArticleType) => React.ReactNode);
  shareLinks?: React.ReactNode;
  collections?:
    | React.ReactElement<typeof Collection>[]
    | ((
        page: PageType | ArticleType,
      ) => React.ReactElement<typeof Collection>[]);
  heroContainer?: JSX.Element;
  backUrl?: string;
  sidebarContentProps?: Partial<typeof SidebarContent>;
  PageContentLayoutComponent?: typeof PageContentLayout;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
} & Partial<typeof PageContentLayout>;

export const defaultContent = (page: PageType | ArticleType) => (
  <PageMainContent
    title={page?.title}
    content={page?.content}
    date={(page as ArticleType)?.date}
    categories={(page as ArticleType)?.categories}
  />
);

export const defaultCollections = (
  page: PageType | ArticleType,
  getRoutedInternalHref: (link: string, type: ModuleItemTypeEnum) => string,
  isEventModulesEnabled = true,
) =>
  getCollections(page?.modules, true)?.reduce(
    (collectionElements, collection) => {
      const commonCollectionProps = {
        key: `collection-${Math.random()}`,
        title: collection.title,
        description: collection.description,
        type: getCollectionUIType(collection),
        collectionContainerProps: { withDots: false },
      };

      if (isEventSearchCollection(collection)) {
        if (isEventModulesEnabled) {
          collectionElements.push(
            <EventSearchCollection
              {...commonCollectionProps}
              collection={collection}
            />,
          );
        }
      } else if (isEventSelectionCollection(collection)) {
        if (isEventModulesEnabled) {
          collectionElements.push(
            <EventSelectionCollection
              {...commonCollectionProps}
              collection={collection}
            />,
          );
        }
      } else {
        const cards = getCollectionCards(collection).map((cardProps) => {
          const url = getRoutedInternalHref(cardProps.url, null);
          return (
            <Card
              key={cardProps.id}
              {...cardProps}
              url={url}
              direction="fixed-vertical"
            />
          );
        });

        collectionElements.push(
          <Collection
            {...commonCollectionProps}
            showAllUrl={collection.showAllUrl}
            cards={cards}
          />,
        );
      }
      return collectionElements;
    },
    [],
  );

export function PageContent(props: PageContentProps) {
  const {
    page,
    breadcrumbs,
    collections,
    heroContainer,
    backUrl,
    sidebarContentProps,
    PageContentLayoutComponent = PageContentLayout,
    content,
    shareLinks,
    ...pageContentLayoutProps
  } = props;

  const {
    components: { Head },
    utils: { getRoutedInternalHref },
    eventsApolloClient,
    mainContentId,
  } = useConfig();

  const isEventModulesEnabled =
    eventsApolloClient !== undefined && eventsApolloClient !== 'disabled';

  return (
    <main id={mainContentId || 'main-content'}>
      {Head && <PageMeta headComponent={Head} page={page} />}
      <PageContentLayoutComponent
        {...props}
        {...pageContentLayoutProps}
        breadcrumbs={
          breadcrumbs && <PageContentBreadcrumbs breadcrumbs={breadcrumbs} />
        }
        heroContainer={heroContainer}
        id={page?.id ?? 'page'}
        imageSrc={page?.featuredImage?.node?.mediaItemUrl}
        imageAlt={page?.featuredImage?.node?.altText}
        imageLabel={page?.featuredImage?.node?.altText}
        backUrl={backUrl}
        content={
          typeof content === 'function'
            ? content(page)
            : content ?? defaultContent(page)
        }
        shareLinks={shareLinks}
        collections={
          typeof collections === 'function'
            ? collections(page)
            : collections ??
              defaultCollections(
                page,
                getRoutedInternalHref,
                isEventModulesEnabled,
              )
        }
        sidebarContent={
          <SidebarContent
            content={(page as PageType)?.sidebar}
            {...sidebarContentProps}
          />
        }
      />
    </main>
  );
}
