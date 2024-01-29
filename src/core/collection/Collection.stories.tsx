/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Collection } from './Collection';
import page from '../pageContent/__mocks__/page.mock';
import { getCollections, getCollectionCards } from '../pageContent/utils';
import { defaultConfig } from '../configProvider/defaultConfig';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { Card } from '../card/Card';
import cardMock from '../card/__mocks__/card.mock';
import { GeneralCollectionType } from './types';
import { StoryContainer } from '../storyContainer/StoryContainer';

export default {
  title: 'Core components/Collection',
  component: Collection,
  subcomponents: {
    Card,
  },
  argTypes: {
    cards: { control: { type: null } },
    // collectionContainerProps: { control: { type: null } },
    type: { control: { type: null } },
  },
} as Meta<typeof Collection>;

const Template: StoryFn<typeof Collection> = (args) => (
  <StoryContainer>
    <ConfigProvider
      config={{
        ...defaultConfig,
      }}
    >
      <Collection {...args} />
    </ConfigProvider>
  </StoryContainer>
);

const collection = getCollections([
  page?.modules[0],
])[0] as GeneralCollectionType;
const organisationPrefixes = [...defaultConfig.organisationPrefixes];
const cards = [
  ...getCollectionCards(collection, organisationPrefixes),
  ...getCollectionCards(collection, organisationPrefixes),
  ...getCollectionCards(collection, organisationPrefixes),
  ...getCollectionCards(collection, organisationPrefixes),
  ...getCollectionCards(collection, organisationPrefixes),
].map((cardProps, index) => (
  <Card
    key={`${cardProps.id}-${index.toString()}`}
    {...cardProps}
    title={`${(index + 1).toString()}: ${cardProps.title}`}
    imageUrl={cardProps.imageUrl || cardMock.imageUrl}
  />
));

export const CollectionWithGrid = {
  render: Template,

  args: {
    cards,
    title: 'Grid Collection Heading',
    type: 'grid',
    collectionContainerProps: { colsCount: 4 },
    showAllUrl: '#',
  },
};

export const CollectionWithCarousel = {
  render: Template,

  args: {
    cards,
    title: 'Carousel Collection Heading',
    type: 'carousel',
    collectionContainerProps: {
      itemsDesktop: 5,
      itemsMobile: 2,
      withDots: false,
    },
    showAllUrl: '#',
  },
};
