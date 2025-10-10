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
    <Tag {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra
      urna. Nunc tellus metus, finibus vitae luctus et, feugiat id nunc. Sed sit
      amet diam sed dui posuere rutrum sit amet et est.
    </Tag>
  </StoryContainer>
);

export const TagDefault = {
  render: Template,
  args: {
    onClick: undefined,
  },
};

export const TagFeatured = {
  render: Template,
  args: {
    ...TagDefault.args,
    featured: true,
  },
};

export const TagSelected = {
  render: Template,
  args: {
    ...TagDefault.args,
    selected: true,
  },
};

export const TagWhiteOnly = {
  render: Template,
  args: {
    ...TagDefault.args,
    whiteOnly: true,
  },
};

export const TagNoTextWrap = {
  render: Template,
  args: {
    ...TagDefault.args,
    noTextWrap: true,
  },
};

export const TagWithOnclickHandler = {
  render: Template,
  args: {
    ...TagDefault.args,
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('onClick handler called');
    },
  },
};
