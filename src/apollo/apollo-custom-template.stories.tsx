/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { HelmetProvider } from 'react-helmet-async';

import { ConfigProvider } from '../core/configProvider/ConfigProvider';
import { defaultConfig } from '../core/configProvider/defaultConfig';
import { PageContent } from './pageContent/PageContent';
import { Navigation } from './navigation/Navigation';
import { Notification } from './notification/Notification';
import { Page } from './page/Page';
import { PageContentLayout } from '../core/pageContent/PageContentLayout';
import { LanguageCodeEnum } from '../core';
import { useCmsEndpointConfig } from '../storybook-common/useCmsEndpointConfig';
import type { CmsEndpoint } from '../storybook-common/constants';
import { cmsMenuName, cmsTestPage } from '../storybook-common/constants';
import { HelmetWrapper } from '../storybook-common/HelmetWrapper';

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

function getTemplate(
  dataSource: keyof typeof CmsEndpoint,
): StoryFn<typeof Page> {
  return function ApolloCustomTemplate(args) {
    const {
      apolloClient,
      eventsApolloClient,
      internalHrefOrigins = [],
    } = useCmsEndpointConfig(dataSource);
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
              Head: HelmetWrapper,
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
}

export default {
  title: 'Apollo examples/Custom template',
  component: Page,
  subcomponents: { PageContent, PageContentLayout, Notification, Navigation },
} as Meta<typeof Page>;

const ApolloCustomLayoutExample = {
  args: {
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
  ...ApolloCustomLayoutExample.args,
});

export const ExampleUsingKultusDataSource = getTemplate('kultus').bind({});
ExampleUsingKultusDataSource.args = getAppSpecificArgs('kultus');

export const ExampleUsingKukkuuDataSource = getTemplate('kukkuu').bind({});
ExampleUsingKukkuuDataSource.args = getAppSpecificArgs('kukkuu');
