/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { Tag } from './Tag';
import { StoryContainer } from '../../../core/storyContainer/StoryContainer';

export default {
  title: 'Common components/Tag',
  component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => (
  <StoryContainer>
    <Tag {...args}>Tag content 1</Tag>
    <Tag {...args}>Tag content 2</Tag>
    <Tag {...args}>Tag content 3</Tag>
  </StoryContainer>
);

export const TagDefault = {
  render: Template,
};

export const TagFeatured = {
  render: Template,
  args: {
    featured: true,
  },
};

export const TagSelected = {
  render: Template,
  args: {
    selected: true,
  },
};

export const TagWhiteOnly = {
  render: Template,
  args: {
    whiteOnly: true,
  },
};
