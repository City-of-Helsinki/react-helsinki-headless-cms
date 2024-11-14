/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import card from './__mocks__/card.mock';
import { LargeCard } from './LargeCard';

export default {
  title: 'Core components/LargeCard',
  component: LargeCard,
} as Meta<typeof LargeCard>;

const Template: StoryFn<typeof LargeCard> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
      components: {
        ...defaultConfig.components,
      },
    }}
  >
    <div style={{ maxWidth: 1470, margin: 24 }}>
      <LargeCard {...args} url="https://hel.fi" hasLink />
      <LargeCard {...args} imagePosition="image-left" />
      <LargeCard
        {...args}
        imageUrl="/broken/large/image.jpg"
        title="Fallback image"
      />
    </div>
  </ConfigProvider>
);

export const LargeCardDefault = {
  render: Template,
  args: { ...card },
};
