/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { LinkBox } from './LinkBox';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';

export default {
  title: 'Core components/LinkBox',
  component: LinkBox,
  argTypes: {
    iconRight: { control: false },
    iconLeft: { control: false },
  },
} satisfies Meta<typeof LinkBox>;

const Template: StoryFn<typeof LinkBox> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LinkBox {...args} aria-label="Linkbox" href="/internal">
        <h1>Some content in the linkbox</h1>
      </LinkBox>
    </div>
  </ConfigProvider>
);

export const LinkboxDefault = {
  render: Template,
};
