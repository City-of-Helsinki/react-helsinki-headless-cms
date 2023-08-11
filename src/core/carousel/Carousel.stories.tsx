/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Carousel } from './Carousel';
import { Card } from '../card/Card';
import card from '../card/__mocks__/card.mock';
import { defaultConfig } from '../configProvider/defaultConfig';
import { ConfigProvider } from '../configProvider/ConfigProvider';

export default {
  title: 'Core components/Carousel',
  component: Carousel,
  subcomponents: { Card },
  argTypes: {
    title: { control: { type: 'text' } },
    loadMoreButtonLabelText: { control: { type: 'text' } },
    hasMore: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    onLoadMore: { control: { type: 'null' } },
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
    <div>
      <div style={{ overflow: 'hidden', padding: 24 }}>
        <Carousel {...args}>
          <Card {...card} title="1" direction="fixed-vertical" />
          <Card {...card} title="2" direction="fixed-vertical" />
          <Card {...card} title="3" direction="fixed-vertical" />
          <Card {...card} title="4" direction="fixed-vertical" />
          <Card {...card} title="5" direction="fixed-vertical" />
          <Card {...card} title="6" direction="fixed-vertical" />
          <Card {...card} title="7" direction="fixed-vertical" />
        </Carousel>
      </div>
    </div>
  </ConfigProvider>
);

export const CarouselDefault = {
  render: Template,

  args: {
    itemsDesktop: 4,
    itemsMobile: 2,
  },
};
