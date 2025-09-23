/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Koros } from 'hds-react';

import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import pageMock from './__mocks__/page.mock';
import articleMock from './__mocks__/article.mock';
import pageWithDiverseContent from './__mocks__/pageWithDiverseContent.mock';
import { PageContent } from './PageContent';
import { Collection } from '../collection/Collection';
import { Card } from '../card/Card';
import {
  getCollectionCards,
  getCollections,
  getCollectionUIType,
} from './utils';
import { PageMainContent } from './PageMainContent';
import type { ArticleType, PageType } from '../../common/headlessService/types';

export default {
  title: 'Core components/PageContent',
  component: PageContent,
  subcomponents: { Collection, Card },
  argTypes: {
    heroContainer: { control: false },
    breadcrumbs: { control: false },
    shareLinks: { control: false },
    collections: { control: false },
    sidebarContentProps: { control: false },
    content: { control: false },
  },
} satisfies Meta<typeof PageContent>;

const Template: StoryFn<typeof PageContent> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
    }}
  >
    <PageContent {...args} />
  </ConfigProvider>
);

const KorosWrapperComponent = ({ children = null }) => (
  <div style={{ position: 'relative' }}>
    {children}
    <Koros
      flipVertical
      style={{
        position: 'absolute',
        bottom: -24,
        height: 1,
        lineHeight: 0,
        fill: 'var(--color-black-5)',
      }}
    />
  </div>
);

export const PageContentDefault = {
  render: Template,

  args: {
    backUrl: '/',
    page: pageMock,
  },
};

export const PageContentWithDefinedCollections = {
  render: Template,

  args: {
    backUrl: '/',
    page: pageMock,
  },
};

export const PageContentWithFunctions = {
  render: Template,

  args: {
    backUrl: '/',
    page: pageMock,
    content: (page: PageType | ArticleType) => (
      <PageMainContent
        title={`${page?.title} (created with a custom function)`}
        content={page?.content ?? ''}
      />
    ),
    collections: (page: PageType | ArticleType) =>
      getCollections(page?.modules ?? [], false)?.map((collection) => (
        <Collection
          key={`collection-${Math.random()}`}
          title={`${collection.title} (created with a custom function)`}
          // @ts-expect-error ts(2345) evet selection does not have items, but events (property)
          cards={getCollectionCards(collection, [
            ...defaultConfig.organisationPrefixes,
          ]).map((cardProps) => (
            <Card
              key={cardProps.id}
              {...cardProps}
              imageUrl={
                cardProps.imageUrl || pageMock.featuredImage?.node?.mediaItemUrl
              }
            />
          ))}
          type={getCollectionUIType(collection)}
          collectionContainerProps={{ withDots: false }}
        />
      )),
  },
};

export const PageContentArticle = {
  render: Template,

  args: {
    heroContainer: <KorosWrapperComponent />,
    backUrl: '/',
    page: articleMock,
  },
};

export const PageContentWithSupportedContentTypes = {
  render: Template,

  args: {
    backUrl: '/',
    page: pageWithDiverseContent,
  },
};
