/* eslint-disable react/function-component-definition */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';
import { SecondaryLink } from './SecondaryLink';
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
      <SecondaryLink
        {...args}
        ariaLabel="External secondary"
        href="https://hel.fi"
      >
        External secondary link
      </SecondaryLink>
      <SecondaryLink
        {...args}
        ariaLabel="Internal secondary with arrow right"
        href="/internal-3"
      >
        Secondary Internal link
      </SecondaryLink>
      <SecondaryLink
        {...args}
        ariaLabel="Internal secondary with arrow right"
        href="/internal-3"
        variant="arrowRight"
      >
        Secondary Internal link with arrow right
      </SecondaryLink>
    </div>
  </ConfigProvider>
);

export const LinkDefault = Template.bind({});
