/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconAngleRight, IconArrowRight } from 'hds-react';

import { Link } from './Link';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';

export default {
  title: 'Example/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link {...args} ariaLabel="External link" href="https://hel.fi">
        Externnal link
      </Link>
      <Link {...args} ariaLabel="Internal link default" href="/internal">
        Internal link default
      </Link>
      <Link
        {...args}
        ariaLabel="Internal link with arrow right"
        href="/internal-2"
        iconRight={<IconAngleRight />}
      >
        Internal link with arrow right
      </Link>
      <Link
        {...args}
        ariaLabel="Internal link with arrow right"
        href="/internal-3"
        iconLeft={<IconArrowRight />}
      >
        Internal link with arrow right
      </Link>
    </div>
  </ConfigProvider>
);

export const LinkDefault = Template.bind({});
