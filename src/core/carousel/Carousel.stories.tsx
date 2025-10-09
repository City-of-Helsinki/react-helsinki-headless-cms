/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { Carousel } from './Carousel';
import { Card } from '../card/Card';
import card from '../card/__mocks__/card.mock';
import { defaultConfig } from '../configProvider/defaultConfig';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { StoryContainer } from '../storyContainer/StoryContainer';

export default {
  title: 'Core components/Carousel',
  component: Carousel,
  subcomponents: { Card },
  argTypes: {
    title: { control: { type: 'text' } },
    loadMoreButtonLabelText: { control: { type: 'text' } },
    hasMore: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    navigateWithDots: { control: { type: 'boolean' } },
  },
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
      internalHrefOrigins: [],
    }}
  >
    <StoryContainer>
      <Carousel {...args}>
        <Card {...card} title="1" direction="fixed-vertical" />
        <Card {...card} title="2" direction="fixed-vertical" />
        <Card {...card} title="3" direction="fixed-vertical" />
        <Card {...card} title="4" direction="fixed-vertical" />
        <Card {...card} title="5" direction="fixed-vertical" />
        <Card {...card} title="6" direction="fixed-vertical" />
        <Card {...card} title="7" direction="fixed-vertical" />
      </Carousel>
    </StoryContainer>
  </ConfigProvider>
);

export const CarouselDefault = {
  render: Template,
  args: {
    itemsDesktop: 4,
    itemsMobile: 1,
    onLoadMore: () => {
      // eslint-disable-next-line no-console
      console.log('onLoadMore triggered');
    },
    loadMoreButtonLabelText: 'Load more',
  },
};

export const CarouselWithDots = {
  render: Template,
  args: {
    ...CarouselDefault.args,
    withDots: true,
    navigateWithDots: true,
  },
};

export const CarouselWithAriaLabelTitle = {
  render: Template,
  args: {
    ...CarouselDefault.args,
    title: 'Carousel custom title',
  },
};
