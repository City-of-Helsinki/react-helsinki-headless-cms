/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CardModule } from './CardModule';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { defaultConfig } from '../../configProvider/defaultConfig';
import { SELECT_COLORS } from '../constants';

export default {
  title: 'Core components/Card module',
  component: CardModule,
  args: {
    title: "Card title",
    subTitle: "Card subtitle",
    text: "Card text content",
    backgroundColor: "coat-of-arms"
  },
  argTypes: { 
    backgroundColor: { 
      control: 'select', 
      options:  SELECT_COLORS
    }
  }
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
    <div style={{margin: 24}}>
      <CardModule {...args} />
    </div></ConfigProvider>
);

export const CardModuleDefault = {
  render: Template,
};
