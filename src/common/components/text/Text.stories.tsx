/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import Text from './Text';
import { StoryContainer } from '../../../core/storyContainer/StoryContainer';

export default {
  title: 'Common components/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => (
  <StoryContainer>
    <Text variant="h1" {...args}>
      Text example content H1
    </Text>
    <Text variant="h2" {...args}>
      Text example content H2
    </Text>
    <Text variant="h3" {...args}>
      Text example content H3
    </Text>
    <Text variant="h4" {...args}>
      Text example content H4
    </Text>
    <Text variant="h5" {...args}>
      Text example content H5
    </Text>
    <Text variant="body" {...args}>
      Text example content BODY
    </Text>
    <Text variant="body-l" {...args}>
      Text example content BODY-L
    </Text>
    <Text variant="body-xl" {...args}>
      Text example content BODY-XL
    </Text>
  </StoryContainer>
);

export const TextDefault = {
  render: Template,
};
