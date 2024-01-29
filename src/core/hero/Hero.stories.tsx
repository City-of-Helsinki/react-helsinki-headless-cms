/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Hero from './Hero';
import { StoryContainer } from '../storyContainer/StoryContainer';
import { defaultConfig } from '../configProvider/defaultConfig';
import { ConfigProvider } from '../configProvider/ConfigProvider';

export default {
  title: 'Core components/Hero',
  component: Hero,
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = (args) => (
  <StoryContainer>
    <ConfigProvider
      config={{
        ...defaultConfig,
      }}
    >
      <Hero {...args} />
    </ConfigProvider>
  </StoryContainer>
);

export const HeroDefault = {
  render: Template,
  args: {
    title: 'Hero title',
    description: 'Hero description',
    backgroundColor: 'tram',
    korosType: 'pulse',
    actionText: 'Call to action',
    actionUrl: '#',
  },
};
