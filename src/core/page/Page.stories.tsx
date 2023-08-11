/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { LanguageCodeEnum } from '../../common/headlessService/types';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import pageMock from '../pageContent/__mocks__/page.mock';
import { PageContent } from '../pageContent/PageContent';
import navigationLanguages from '../navigation/__mocks__/navigationLanguages.mock';
import navigationMenu from '../navigation/__mocks__/navigationMenu.mock';
import { Navigation } from '../navigation/Navigation';
import { Notification } from '../notification/Notification';
import notificationMock from '../notification/__mocks__/notification.mock';
import { Page } from './Page';
import { Collection } from '../collection/Collection';
import {
  getCollectionCards,
  getCollections,
  getCollectionUIType,
} from '../pageContent/utils';
import { Card } from '../card/Card';
import { GeneralCollectionType } from '../collection/types';

export default {
  title: 'Core components/Page',
  component: Page,
  subcomponents: { PageContent, Navigation, Notification, Collection },
  argTypes: {
    navigation: { control: { type: null } },
    notification: { control: { type: null } },
    content: { control: { type: null } },
    footer: { control: { type: null } },
  },
} as Meta<typeof Page>;

const domain = window.location.origin ?? 'http://localhost:6006';
const cmsDomain = new URL(
  process.env.CMS_GRAPHQL_ENDPOINT ?? 'https://hkih.stage.geniem.io/graphql',
).origin;
const Template: StoryFn<typeof Page> = (args) => (
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
        utils: {
          ...defaultConfig.utils,
          getRoutedInternalHref: (link) => {
            let uri = '';
            [domain, cmsDomain].forEach((d) => {
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

export const PageDefault = {
  render: Template,

  args: {
    navigation: (
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
            ).href;
          }
          return new URL(
            currentRatherComplexUrl.pathname.replace(
              `/${currentLanguage.slug}`,
              slug,
            ),
            domain,
          ).href;
        }}
      />
    ),
    notification: <Notification notification={notificationMock} />,
    content: (
      <PageContent
        page={pageMock}
        backUrl="/"
        breadcrumbs={[
          { title: 'Root', link: '/' },
          { title: 'Nested', link: '/nested' },
        ]}
        collections={getCollections(pageMock.modules)?.map((collection) => (
          <Collection
            key={`collection-${Math.random()}`}
            title={collection.title}
            collectionContainerProps={{ withDots: false }}
            type={getCollectionUIType(collection)}
            cards={getCollectionCards(collection as GeneralCollectionType).map(
              (cardProps) => (
                <Card
                  key={cardProps.id}
                  {...cardProps}
                  imageUrl={
                    cardProps.imageUrl ||
                    pageMock.featuredImage?.node?.mediaItemUrl
                  }
                  direction="fixed-vertical"
                  clampText
                />
              ),
            )}
          />
        ))}
      />
    ),
    footer: <>TODO: Implement footer</>,
  },
};
