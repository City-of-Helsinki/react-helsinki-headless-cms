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
  PageArticleCollection,
  EventSearchCollection,
  EventSelectionCollection,
  LocationsSelectionCollection,
} from '../collection/Collection';
import {
  ArticleType,
  LanguageCodeEnum,
  PageType,
} from '../../common/headlessService/types';
import { getCollections, getCollectionUIType } from './utils';
import {
  isEventSearchCollection,
  isEventSelectionCollection,
  isLocationsSelectionCollection,
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

export const defaultCollections = ({
  page,
  isEventModulesEnabled = true,
  isVenueModulesEnabled = true,
}: {
  page: PageType | ArticleType;
  isEventModulesEnabled: boolean;
  isVenueModulesEnabled: boolean;
}) =>
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
      } else if (isLocationsSelectionCollection(collection)) {
        if (isVenueModulesEnabled) {
          collectionElements.push(
            <LocationsSelectionCollection
              {...commonCollectionProps}
              collection={collection}
              locale={page.language.locale as LanguageCodeEnum}
            />,
          );
        }
      } else {
        collectionElements.push(
          <PageArticleCollection
            {...commonCollectionProps}
            collection={collection}
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
    eventsApolloClient,
    venuesApolloClient,
    mainContentId,
  } = useConfig();

  const isEventModulesEnabled =
    eventsApolloClient !== undefined && eventsApolloClient !== 'disabled';
  const isVenueModulesEnabled =
    eventsApolloClient !== undefined && venuesApolloClient !== 'disabled';

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
              defaultCollections({
                page,
                isEventModulesEnabled,
                isVenueModulesEnabled,
              })
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
