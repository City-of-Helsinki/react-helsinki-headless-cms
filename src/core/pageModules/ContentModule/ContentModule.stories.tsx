/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ContentModule } from './ContentModule';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { defaultConfig } from '../../configProvider/defaultConfig';
import { SELECT_COLORS } from '../constants';
import { RANDOM_CONTENT } from '../../../constants';

export default {
  title: 'Core components/Content module',
  component: ContentModule,
  args: {
    content: '<div><h1>Here is custom content!</h1></div>',
    backgroundColor: 'gold',
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: SELECT_COLORS,
    },
  },
} as Meta<typeof ContentModule>;

const Template: StoryFn<typeof ContentModule> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
    }}
  >
    <div style={{ margin: 24 }}>
      <div>{RANDOM_CONTENT}</div>
      <ContentModule {...args} />
      <div>{RANDOM_CONTENT}</div>
    </div>
  </ConfigProvider>
);

export const ContentModuleDefault = {
  render: Template,
};
