/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Common components/Tag',
  component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => (
  <div>
    <Tag {...args}>Default</Tag>
    <Tag featured {...args}>
      Featured
    </Tag>
    <Tag>No outline</Tag>
  </div>
);

export const TagDefault = {
  render: Template,
};
