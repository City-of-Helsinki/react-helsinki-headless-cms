/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { LanguageCodeEnum, PageType } from '../../common/headlessService/types';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import { SearchPageContent as ArchiveSearchPageContent } from '../archiveSearchPageContent/ArchiveSearchPageContent';
import navigationLanguages from '../navigation/__mocks__/navigationLanguages.mock';
import navigationMenu from '../navigation/__mocks__/navigationMenu.mock';
import { Navigation } from '../navigation/Navigation';
import { ArchivePage as ArchiveSearchPage } from './ArchiveSearchPage';
import articles from '../archiveSearchPageContent/__mocks__/articles.mock';
import pages from '../archiveSearchPageContent/__mocks__/pages.mock';
import pageWithChildren from '../archiveSearchPageContent/__mocks__/pageChildrenSearch.mock';
import { LargeCard, LargeCardProps } from '../card/LargeCard';
import { Card, CardProps } from '../card/Card';
import { filterPagesAndArticles } from '../../common/headlessService/utils';
import HtmlToReact from '../../common/components/htmlToReact/HtmlToReact';
import { formatDateTimeFromString } from '../../common/utils/dates';
import { CollectionItemType } from '../collection/types';
import mockPage from '../pageContent/__mocks__/page.mock';
import { PageMainContent } from '../pageContent/PageMainContent';

export default {
  title: 'Example/ArchiveSearchPage',
  component: ArchiveSearchPage,
} as ComponentMeta<typeof ArchiveSearchPage>;

const domain = window.location.origin ?? 'http://localhost:6006';

const navigation = (
  <Navigation
    languages={navigationLanguages}
    menu={navigationMenu}
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
          slug,
        ),
        domain,
      ).pathname;
    }}
  />
);

const getCardProps = (
  item: CollectionItemType,
): CardProps | LargeCardProps => ({
  id: item.id,
  ariaLabel: item.title || '',
  title: item.title || '',
  subTitle: 'date' in item && formatDateTimeFromString(item.date || ''),
  customContent: <HtmlToReact>{item.lead || ''}</HtmlToReact>,
  url: item.slug || '',
  imageUrl: item.featuredImage?.node.mediaItemUrl || '',
});

const createLargeCard = (item: CollectionItemType) => (
  <LargeCard {...getCardProps(item)} />
);
const createCard = (item: CollectionItemType) => (
  <Card {...getCardProps(item)} withShadow />
);

const Template: ComponentStory<typeof ArchiveSearchPage> = (args) => (
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

export const ArchiveSearchPageWithArticles = Template.bind({});
ArchiveSearchPageWithArticles.args = {
  navigation,
  content: (
    <ArchiveSearchPageContent
      items={articles.edges.map((edge) => edge.node)}
      tags={['label1', 'label2', 'label3']}
      onSearch={(freeSearch, tags) => {
        // eslint-disable-next-line no-console
        console.log('search params:', freeSearch, tags);
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log('load more items');
      }}
      createLargeCard={createLargeCard}
      createCard={createCard}
    />
  ),
  footer: <>TODO: Implement footer</>,
};

export const ArchiveSearchPageWithPages = Template.bind({});
ArchiveSearchPageWithPages.args = {
  navigation,
  content: (
    <ArchiveSearchPageContent
      items={pages.edges.map((edge) => edge.node)}
      onSearch={(freeSearch, tags) => {
        // eslint-disable-next-line no-console
        console.log('search params:', freeSearch, tags);
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log('load more items');
      }}
      createLargeCard={createLargeCard}
      createCard={createCard}
    />
  ),
  footer: <>TODO: Implement footer</>,
};

export const ArchiveSearchPageWithPageSubPages = Template.bind({});
ArchiveSearchPageWithPageSubPages.args = {
  navigation,
  content: (
    <ArchiveSearchPageContent
      customContent={
        <PageMainContent title={mockPage.title} content={mockPage.content} />
      }
      items={filterPagesAndArticles(
        pageWithChildren.edges.map((edge) => edge.node as PageType),
      )}
      onSearch={(freeSearch, tags) => {
        // eslint-disable-next-line no-console
        console.log('search params:', freeSearch, tags);
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log('load more items');
      }}
      createCard={createCard}
      largeFirstItem={false}
      hasMore
    />
  ),
  footer: <>TODO: Implement footer</>,
};
