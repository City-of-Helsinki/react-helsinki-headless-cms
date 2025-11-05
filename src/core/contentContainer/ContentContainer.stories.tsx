/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { ContentContainer } from './ContentContainer';
import { StoryContainer } from '../storyContainer/StoryContainer';

export default {
  title: 'Core components/ContentContainer',
  component: ContentContainer,
} as Meta<typeof ContentContainer>;

const Template: StoryFn<typeof ContentContainer> = (args) => (
  <StoryContainer>
    <ContentContainer {...args}>Custom content</ContentContainer>
  </StoryContainer>
);

export const ContentContainerDefault = {
  render: Template,
  args: {},
};
