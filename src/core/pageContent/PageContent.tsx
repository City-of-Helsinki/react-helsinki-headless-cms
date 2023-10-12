import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

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
  isLayoutCard,
  isLayoutCards,
  isLayoutContent,
  isLayoutImage,
  isLayoutSteps,
  isLocationsSelectionCollection,
} from '../../common/headlessService/utils';
import { ContentModule } from '../pageModules/ContentModule/ContentModule';
import { CardModule } from '../pageModules/CardModule/CardModule';
import { CardsModule } from '../pageModules/CardsModule/CardsModule';
import { ImageModule } from '../pageModules/ImageModule/ImageModule';
import { StepsModule } from '../pageModules/StepsModule/StepsModule';

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
  className?: string;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
} & Partial<typeof PageContentLayout>;

// Modules: Content, Image, Cards, Steps (possibly other in future)
export const defaultContentModules = (
  page: PageType | ArticleType,
): React.ReactNode[] => {
  const contentModules: React.ReactNode[] = [];
  page?.modules?.map((module) => {
    if (isLayoutContent(module)) {
      contentModules.push(
        <ContentModule
          content={module.content}
          backgroundColor={module.backgroundColor}
        />,
      );
    } else if (isLayoutCard(module)) {
      contentModules.push(
        <CardModule
          title={module.title}
          text={module.description}
          backgroundColor={module.backgroundColor}
          hasLink
          url={module.link.url}
          imageUrl={module.image.medium}
          imagePosition={
            module.alignment === 'right' ? 'image-right' : 'image-left'
          }
          isDelimited={module.alignment.startsWith('delimited')}
        />,
      );
    } else if (isLayoutCards(module)) {
      contentModules.push(<CardsModule items={module.cards} />);
    } else if (isLayoutImage(module)) {
      contentModules.push(<ImageModule />);
    } else if (isLayoutSteps(module)) {
      contentModules.push(
        <StepsModule
          title={module.title}
          steps={module.steps.map((step) => ({
            title: step.title,
            content: step.content,
          }))}
          helpText={module.description}
          color={module.color}
          type={module.type}
        />,
      );
    }
    return null;
  });
  return contentModules;
};

export const defaultContent = (page: PageType | ArticleType) => (
  <PageMainContent
    title={page?.title}
    content={page?.content}
    date={(page as ArticleType)?.date}
    categories={(page as ArticleType)?.categories}
    contentModules={defaultContentModules(page)}
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
    className,
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
    <main
      id={mainContentId || 'main-content'}
      className={classNames('page-main-content', className)}
    >
      {Head && <PageMeta headComponent={Head} page={page} />}
      <PageContentLayoutComponent
        {...props}
        {...pageContentLayoutProps}
        breadcrumbs={
          breadcrumbs && <PageContentBreadcrumbs breadcrumbs={breadcrumbs} />
        }
        title={`${page.title}1111`}
        heroContainer={heroContainer}
        id={page?.id ?? 'page'}
        imageSrc={page?.featuredImage?.node?.mediaItemUrl}
        imageAlt={page?.featuredImage?.node?.altText}
        imageLabel={page?.featuredImage?.node?.photographerName}
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
