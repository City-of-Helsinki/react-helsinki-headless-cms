/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
    <div>
      <Tag {...args}>Default</Tag>
      <Tag featured {...args}>Featured</Tag>
      <Tag>No outline</Tag>
    </div>
);

export const TagDefault = Template.bind({});
