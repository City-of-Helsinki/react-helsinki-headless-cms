/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import type { ArticleType, PageType } from '../../common/headlessService/types';
import { LanguageCodeEnum } from '../../common/headlessService/types';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import { SearchPageContent as ArchiveSearchPageContent } from '../archiveSearchPageContent/ArchiveSearchPageContent';
import navigationLanguages from '../navigation/__mocks__/navigationLanguages.mock';
import navigationMenu from '../navigation/__mocks__/navigationMenu.mock';
import navigationUniversalBarMenu from '../navigation/__mocks__/navigationUniversalBarMenu.mock';
import { Navigation } from '../navigation/Navigation';
import { ArchivePage as ArchiveSearchPage } from './ArchiveSearchPage';
import articles from '../archiveSearchPageContent/__mocks__/articles.mock';
import pages from '../archiveSearchPageContent/__mocks__/pages.mock';
import pageWithChildren from '../archiveSearchPageContent/__mocks__/pageChildrenSearch.mock';
import type { LargeCardProps } from '../card/LargeCard';
import { LargeCard } from '../card/LargeCard';
import type { CardProps } from '../card/Card';
import { Card } from '../card/Card';
import { filterPagesAndArticles } from '../../common/headlessService/utils';
import { HtmlToReact } from '../../common/components/htmlToReact/HtmlToReact';
import { formatDateTimeFromString } from '../../common/utils/dates';
import type { CollectionItemType } from '../collection/types';
import mockPage from '../pageContent/__mocks__/page.mock';
import { PageMainContent } from '../pageContent/PageMainContent';
import categories from '../archiveSearchPageContent/__mocks__/categories.mock';

export default {
  title: 'Core components/ArchiveSearchPage',
  component: ArchiveSearchPage,
  subcomponents: { ArchiveSearchPageContent, Navigation, Card },
  argTypes: {
    navigation: { control: { type: null } },
    content: { control: { type: null } },
    footer: { control: { type: null } },
  },
} as unknown as Meta<typeof ArchiveSearchPage>;

const domain = window.location.origin ?? 'http://localhost:6006';

const navigation = (
  <Navigation
    languages={navigationLanguages}
    menu={navigationMenu}
    universalBarMenu={navigationUniversalBarMenu}
    onTitleClick={() => {
      // eslint-disable-next-line no-console
      console.log('I should navigate');
    }}
    getPathnameForLanguage={({ slug, code }, currentLanguage) => {
      const currentRatherComplexUrl = new URL(
        `${domain}/${currentLanguage.slug}/cms-page/page-slug`,
      );
      if (code === LanguageCodeEnum.Fi) {
        return new URL(
          currentRatherComplexUrl.pathname.replace(
            `/${currentLanguage.slug}`,
            '',
          ),
          domain,
        ).pathname;
      }
      return new URL(
        currentRatherComplexUrl.pathname.replace(
          `/${currentLanguage.slug}`,
          slug ?? '',
        ),
        domain,
      ).pathname;
    }}
  />
);

const getCardProps = (
  item: CollectionItemType & ArticleType,
): CardProps | LargeCardProps =>
  item
    ? {
        id: item.id,
        ariaLabel: item.title || '',
        title: item.title || '',
        subTitle:
          ('date' in item && formatDateTimeFromString(item.date || '')) ||
          undefined,
        customContent: (
          <HtmlToReact>{(item.lead || item.content) ?? ''}</HtmlToReact>
        ),
        url: item.slug || '',
        imageUrl: item.featuredImage?.node.medium_large || '',
      }
    : {};

const createLargeCard = (item: CollectionItemType & ArticleType) => (
  <LargeCard {...getCardProps(item)} />
);
const createCard = (item: CollectionItemType & ArticleType) => (
  <Card {...getCardProps(item)} withShadow />
);

const Template: StoryFn<typeof ArchiveSearchPage> = (args) => (
  <HelmetProvider>
    <ConfigProvider
      config={{
        ...defaultConfig,
        siteName: 'RHHC Example',
        internalHrefOrigins: [domain],
        components: {
          ...defaultConfig.components,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Head: Helmet,
        },
      }}
    >
      <ArchiveSearchPage {...args} />
    </ConfigProvider>
  </HelmetProvider>
);

export const ArchiveSearchPageWithArticles = {
  render: Template,

  args: {
    navigation,
    content: (
      <ArchiveSearchPageContent
        breadcrumbs={[
          { title: 'Root', path: '/' },
          { title: 'Article archive', path: null },
        ]}
        items={articles?.edges.map((edge) => edge.node)}
        tags={categories?.nodes}
        onSearch={(freeSearch, tags) => {
          // eslint-disable-next-line no-console
          console.log('search params:', freeSearch, tags);
        }}
        onLoadMore={() => {
          // eslint-disable-next-line no-console
          console.log('load more items');
        }}
        createLargeCard={(item) => createLargeCard(item as ArticleType)}
        createCard={(item) => createCard(item as ArticleType)}
      />
    ),
    footer: <>TODO: Implement footer</>,
  },
};

export const ArchiveSearchPageWithPages = {
  render: Template,

  args: {
    navigation,
    content: (
      <ArchiveSearchPageContent
        breadcrumbs={[
          { title: 'Root', path: '/' },
          { title: 'Article archive', path: null },
        ]}
        items={pages?.edges.map((edge) => edge.node)}
        onSearch={(freeSearch, tags) => {
          // eslint-disable-next-line no-console
          console.log('search params:', freeSearch, tags);
        }}
        onLoadMore={() => {
          // eslint-disable-next-line no-console
          console.log('load more items');
        }}
        createLargeCard={(item) => createLargeCard(item as ArticleType)}
        createCard={(item) => createCard(item as ArticleType)}
      />
    ),
    footer: <>TODO: Implement footer</>,
  },
};

export const ArchiveSearchPageWithPageSubPages = {
  render: Template,

  args: {
    navigation,
    content: (
      <ArchiveSearchPageContent
        breadcrumbs={[
          { title: 'Root', path: '/' },
          { title: 'Article archive', path: null },
        ]}
        customContent={
          <PageMainContent
            title={mockPage?.title ?? ''}
            content={mockPage?.content ?? ''}
          />
        }
        items={filterPagesAndArticles(
          pageWithChildren?.edges.map((edge) => edge.node as PageType) ?? [],
        )}
        onSearch={(freeSearch, tags) => {
          // eslint-disable-next-line no-console
          console.log('search params:', freeSearch, tags);
        }}
        onLoadMore={() => {
          // eslint-disable-next-line no-console
          console.log('load more items');
        }}
        createCard={(item) => createCard(item as ArticleType)}
        largeFirstItem={false}
        hasMore
      />
    ),
    footer: <>TODO: Implement footer</>,
  },
};
