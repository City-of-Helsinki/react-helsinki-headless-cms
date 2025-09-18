/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ConfigProvider } from '../core/configProvider/ConfigProvider';
import { defaultConfig } from '../core/configProvider/defaultConfig';
import { PageContent } from './pageContent/PageContent';
import { Navigation } from './navigation/Navigation';
import { Notification } from './notification/Notification';
import { Page } from './page/Page';
import { PageContentLayout } from '../core/pageContent/PageContentLayout';
import type { PageType } from '../core';
import { LanguageCodeEnum, getBreadcrumbsFromPage } from '../core';
import { useCmsEndpointConfig } from '../storybook-common/useCmsEndpointConfig';
import type { CmsEndpoint } from '../storybook-common/constants';
import { cmsMenuName, cmsTestPage } from '../storybook-common/constants';

const ExampleNavigation = ({
  menuName,
  currentPage,
}: {
  menuName: string;
  currentPage: string;
}) => (
  <Navigation
    menuName={menuName}
    onTitleClick={() => {
      // eslint-disable-next-line no-console
      console.log('I should navigate');
    }}
    getIsItemActive={({ path }) => path === currentPage}
    getPathnameForLanguage={({ slug }) => `/${slug}${currentPage}`}
  />
);

const getTemplate =
  (datasource: keyof typeof CmsEndpoint): StoryFn<typeof Page> =>
  (args) => {
    const {
      apolloClient,
      eventsApolloClient,
      internalHrefOrigins = [],
    } = useCmsEndpointConfig(datasource);
    return (
      <HelmetProvider>
        <ConfigProvider
          config={{
            ...defaultConfig,
            currentLanguageCode: LanguageCodeEnum.Fi,
            siteName: 'RHHC Example',
            internalHrefOrigins,
            apolloClient,
            eventsApolloClient,
            venuesApolloClient: 'disabled',
            components: {
              ...defaultConfig.components,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              Head: Helmet,
            },
            utils: {
              ...defaultConfig.utils,
              getRoutedInternalHref: (link) => {
                let uri = '';
                internalHrefOrigins.forEach((d) => {
                  uri = link?.replace(d, '') ?? '';
                });
                return uri;
              },
            },
          }}
        >
          <Page {...args} />
        </ConfigProvider>
      </HelmetProvider>
    );
  };

export default {
  title: 'Apollo examples/Basic',
  component: Page,
  subcomponents: { PageContent, PageContentLayout, Notification, Navigation },
  argTypes: {
    navigation: { table: { disable: true } },
    notification: { table: { disable: true } },
    content: { table: { disable: true } },
    footer: { table: { disable: true } },
    className: { table: { disable: true } },
    pageTemplate: { table: { disable: true } },
  },
} as Meta<typeof Page>;

const ApolloBasicExample = {
  args: {
    notification: <Notification />,
    content: (
      <PageContent
        breadcrumbs={(page: PageType) => getBreadcrumbsFromPage(page)}
      />
    ),
    footer: <>TODO: Implement footer</>,
  },
};

const getAppSpecificArgs = (dataSource: keyof typeof CmsEndpoint) => ({
  uri: cmsTestPage[dataSource],
  navigation: (
    <ExampleNavigation
      menuName={cmsMenuName[dataSource]}
      currentPage={cmsTestPage[dataSource]}
    />
  ),
  ...ApolloBasicExample.args,
});

export const ExampleUsingEventsDataSource = getTemplate('events').bind({});
ExampleUsingEventsDataSource.args = getAppSpecificArgs('events');

export const ExampleUsingHobbiesDataSource = getTemplate('hobbies').bind({});
ExampleUsingHobbiesDataSource.args = getAppSpecificArgs('hobbies');

export const ExampleUsingSportsDataSource = getTemplate('sports').bind({});
ExampleUsingSportsDataSource.args = getAppSpecificArgs('sports');

export const ExampleUsingKultusDataSource = getTemplate('kultus').bind({});
ExampleUsingKultusDataSource.args = getAppSpecificArgs('kultus');

export const ExampleUsingKukkuuDataSource = getTemplate('kukkuu').bind({});
ExampleUsingKukkuuDataSource.args = getAppSpecificArgs('kukkuu');
