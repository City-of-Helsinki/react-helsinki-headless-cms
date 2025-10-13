import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { useConfig } from '../configProvider/useConfig';
import SidebarContent from './sidebarContent/SidebarContent';
import { PageContentLayout } from './PageContentLayout';
import { PageMainContent } from './PageMainContent';
import type { PageContentProps } from './types';
import { PageMeta } from './meta/PageMeta';
import {
  PageArticleCollection,
  EventSearchCollection,
  EventSelectionCollection,
  LocationsSelectionCollection,
} from '../collection/Collection';
import type {
  ArticleType,
  LanguageCodeEnum,
  PageType,
} from '../../common/headlessService/types';
import { getHeroProps, getCollections, getCollectionUIType } from './utils';
import {
  isEventSearchCollection,
  isEventSelectionCollection,
  isLayoutCard,
  isLayoutCards,
  isLayoutContent,
  isLayoutImage,
  isLayoutImageGallery,
  isLayoutSocialMediaFeed,
  isLayoutSteps,
  isLocationsSelectionCollection,
  isPageType,
} from '../../common/headlessService/utils';
import { ContentModule } from '../pageModules/ContentModule/ContentModule';
import { CardModule } from '../pageModules/CardModule/CardModule';
import { CardsModule } from '../pageModules/CardsModule/CardsModule';
import { ImageGalleryModule } from '../pageModules/ImageGalleryModule/ImageGalleryModule';
import { StepsModule } from '../pageModules/StepsModule/StepsModule';
import createHashKey from '../utils/createHashKey';
import { MAIN_CONTENT_ID } from '../../common/constants';
import { PageContentBreadcrumb } from './PageContentBreadcrumb';
import type { CardAlignment } from '../card/Card';
import { SocialMediaFeedModule } from '../pageModules/SocialMediaFeedModule/SocialMediaFeedModule';

// Modules: Content, Image, Cards, Steps (possibly other in future)
export const defaultContentModules = (
  page: PageType | ArticleType,
): React.ReactNode[] => {
  const contentModules: React.ReactNode[] = [];
  page?.modules?.map((module, index) => {
    const uniqueKey = createHashKey(`${index}-${JSON.stringify(module)}`);
    if (isLayoutContent(module)) {
      contentModules.push(
        <ContentModule
          key={uniqueKey}
          content={module.content}
          backgroundColor={module.backgroundColor}
        />,
      );
    } else if (isLayoutCard(module)) {
      contentModules.push(
        <CardModule
          key={uniqueKey}
          title={module.title}
          text={module.description}
          backgroundColor={module.backgroundColor}
          hasLink
          url={module.link.url}
          imageUrl={module.image.medium_large}
          alignment={module.alignment as CardAlignment}
        />,
      );
    } else if (isLayoutCards(module)) {
      contentModules.push(<CardsModule key={uniqueKey} items={module.cards} />);
    } else if (isLayoutImage(module)) {
      contentModules.push(
        <ImageGalleryModule
          images={[
            {
              url: module.image?.medium_large,
              previewUrl: module.image?.medium,
              photographer: module.photographer_name,
            },
          ]}
          key={uniqueKey}
          withBorder={module.border}
          withLightbox={module.show_on_lightbox}
          lightboxUid={`lightbox-${index}`}
          columns={1}
        />,
      );
    } else if (isLayoutImageGallery(module)) {
      contentModules.push(
        <ImageGalleryModule
          images={module.gallery?.map((image) => ({
            url: image.medium_large,
            previewUrl: image.medium,
            photographer: image.caption,
            title: image.title,
          }))}
          key={uniqueKey}
          withLightbox
          lightboxUid={`lightbox-${index}`}
          columns={3}
        />,
      );
    } else if (isLayoutSteps(module)) {
      contentModules.push(
        <StepsModule
          key={uniqueKey}
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
    } else if (isLayoutSocialMediaFeed(module)) {
      contentModules.push(
        <SocialMediaFeedModule
          key={uniqueKey}
          anchor={module.anchor}
          title={module.title}
          script={module.script}
        />,
      );
    }
    return null;
  });
  return contentModules;
};

export const defaultContent = (
  page: PageType | ArticleType,
  onArticlesSearch?: (tag: string) => void,
) => {
  let hideTitle = false;
  if (isPageType(page)) {
    hideTitle = Boolean(page?.hero?.title);
  }

  return (
    <PageMainContent
      title={!hideTitle && page.title}
      content={page?.content}
      date={(page as ArticleType)?.date}
      categories={(page as ArticleType)?.categories}
      contentModules={defaultContentModules(page)}
      onArticlesSearch={onArticlesSearch}
    />
  );
};

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
        collectionContainerProps: {},
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
    onArticlesSearch,
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
      id={mainContentId ?? MAIN_CONTENT_ID}
      className={classNames('page-main-content', className)}
    >
      {Head && <PageMeta headComponent={Head} page={page} />}
      <PageContentLayoutComponent
        {...props}
        {...pageContentLayoutProps}
        {...getHeroProps(page)}
        breadcrumbs={
          breadcrumbs &&
          (typeof breadcrumbs === 'function' ? (
            <PageContentBreadcrumb breadcrumbs={breadcrumbs(page)} />
          ) : (
            <PageContentBreadcrumb breadcrumbs={breadcrumbs} />
          ))
        }
        heroContainer={heroContainer}
        id={page?.id ?? 'page'}
        imageSrc={page?.featuredImage?.node?.large}
        imageAlt={page?.featuredImage?.node?.altText}
        imageLabel={page?.featuredImage?.node?.photographerName}
        backUrl={backUrl}
        content={
          typeof content === 'function'
            ? content(page)
            : (content ?? defaultContent(page, onArticlesSearch))
        }
        shareLinks={shareLinks}
        collections={
          typeof collections === 'function'
            ? collections(page)
            : (collections ??
              defaultCollections({
                page,
                isEventModulesEnabled,
                isVenueModulesEnabled,
              }))
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
