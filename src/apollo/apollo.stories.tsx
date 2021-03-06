/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ConfigProvider } from '../core/configProvider/ConfigProvider';
import { defaultConfig } from '../core/configProvider/defaultConfig';
import { PageContent } from './pageContent/PageContent';
import { Navigation } from './navigation/Navigation';
import { Notification } from './notification/Notification';
import { Page } from './page/Page';
import { PageContentLayout } from '../core/pageContent/PageContentLayout';
import { LanguageCodeEnum } from '../core';
import {
  CMS_GRAPHQL_ENDPOINT,
  EVENTS_PROXY_ENDPOINT,
  LINKED_EVENTS_ENDPOINT,
} from '../constants';

const cmsClient = new ApolloClient({
  uri: CMS_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
const eventsClient = new ApolloClient({
  uri: EVENTS_PROXY_ENDPOINT,
  cache: new InMemoryCache(),
});
const internalHrefOrigins = [
  new URL(CMS_GRAPHQL_ENDPOINT).origin,
  new URL(LINKED_EVENTS_ENDPOINT).href.replace('/event/', ''),
];

export default {
  title: 'Example/Apollo',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <HelmetProvider>
    <ConfigProvider
      config={{
        ...defaultConfig,
        currentLanguageCode: LanguageCodeEnum.Fi,
        siteName: 'RHHC Example',
        internalHrefOrigins,
        apolloClient: cmsClient,
        eventsApolloClient: eventsClient,
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
              uri = link.replace(d, '');
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

export const ApolloBasicExample = Template.bind({});

const currentPage = '/testisivu/';
const ExampleNavigation = () => (
  <Navigation
    menuName="Palvelutarjotin-UI Header"
    onTitleClick={() => {
      // eslint-disable-next-line no-console
      console.log('I should navigate');
    }}
    getIsItemActive={({ path }) => path === currentPage}
    getPathnameForLanguage={({ slug }) => `/${slug}${currentPage}`}
  />
);
ApolloBasicExample.args = {
  uri: currentPage,
  navigation: <ExampleNavigation />,
  notification: <Notification />,
  content: (
    <PageContent
      breadcrumbs={[
        { title: 'Root', link: '/' },
        { title: 'Nested', link: '/nested' },
      ]}
    />
  ),
  footer: <>TODO: Implement footer</>,
};

const CustomPageContentLayout: typeof PageContentLayout = ({
  breadcrumbs,
  content,
  collections,
  sidebarContent,
}) => (
  <div>
    <div style={{ marginBottom: 30 }}>
      <div>Breadcrumbs: {breadcrumbs}</div>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        columnGap: 30,
      }}
    >
      <div>Content: {content}</div>
      <div>Sidebar: {sidebarContent}</div>
      <div>Collections: {collections}</div>
    </div>
  </div>
);

export const ApolloCustomLayoutExample = Template.bind({});

ApolloCustomLayoutExample.args = {
  uri: currentPage,
  navigation: <ExampleNavigation />,
  notification: <Notification />,
  content: (
    <PageContent
      breadcrumbs={[
        { title: 'Root', link: '/' },
        { title: 'Nested', link: '/nested' },
      ]}
      PageContentLayoutComponent={CustomPageContentLayout}
    />
  ),
  footer: <>TODO: Implement footer</>,
};
