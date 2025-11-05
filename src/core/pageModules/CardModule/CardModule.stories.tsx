/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { CardModule } from './CardModule';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { defaultConfig } from '../../configProvider/defaultConfig';
import { SELECT_COLORS } from '../constants';
import { RANDOM_CONTENT } from '../../../constants';

export default {
  title: 'Core components/Card module',
  component: CardModule,
  args: {
    title: 'Card title',
    text: 'Card text content',
    backgroundColor: 'silver',
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: SELECT_COLORS,
    },
  },
} as Meta<typeof CardModule>;

const Template: StoryFn<typeof CardModule> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
      components: {
        ...defaultConfig.components,
      },
    }}
  >
    <div style={{ margin: 24 }}>
      <div>{RANDOM_CONTENT}</div>
      <CardModule {...args} />
      <div>{RANDOM_CONTENT}</div>
    </div>
  </ConfigProvider>
);

export const CardModuleDefault = {
  render: Template,
};
