/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkBox } from './LinkBox';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';

export default {
  title: 'Example/LinkBox',
  component: LinkBox,
} as ComponentMeta<typeof LinkBox>;

const Template: ComponentStory<typeof LinkBox> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LinkBox {...args} ariaLabel="Linkbox" href="/internal">
        <h1>Some content in the linkbox</h1>
      </LinkBox>
    </div>
  </ConfigProvider>
);

export const LinkDefault = Template.bind({});
