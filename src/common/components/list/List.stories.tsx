/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import List from './List';
import { StoryContainer } from '../../../core/storyContainer/StoryContainer';

export default {
  title: 'Common components/List',
  component: List,
} as Meta<typeof List>;

const Template: StoryFn<typeof List> = (args) => (
  <StoryContainer>
    <List {...args} />
  </StoryContainer>
);

export const ListDefault = {
  render: Template,
  args: {
    items: ['List item 1', 'List item 2', 'List item 3'],
  },
};
