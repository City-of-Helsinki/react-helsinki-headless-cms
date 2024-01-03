/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Link } from './Link';
import { SecondaryLink } from './SecondaryLink';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';

export default {
  title: 'Core components/Link',
  component: Link,
  subcomponents: { SecondaryLink },
  argTypes: {
    iconRight: { control: { type: null } },
    iconLeft: { control: { type: null } },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link {...args} aria-label="External link" href="https://hel.fi">
        Externnal link
      </Link>
      <Link {...args} aria-label="Internal link default" href="/internal">
        Internal link default
      </Link>
      <Link {...args} aria-label="Email link" href="mailto:test@example.org">
        test@example.org
      </Link>
      <Link {...args} aria-label="Phone link" href="tel:+358 12 345 6789">
        +358 12 345 6789
      </Link>
      <SecondaryLink
        {...args}
        aria-label="External secondary"
        href="https://hel.fi"
      >
        External secondary link
      </SecondaryLink>
      <SecondaryLink
        {...args}
        aria-label="Internal secondary with arrow right"
        href="/internal-3"
      >
        Secondary Internal link
      </SecondaryLink>
      <SecondaryLink
        {...args}
        aria-label="Internal secondary with arrow right"
        href="/internal-3"
        variant="arrowRight"
      >
        Secondary Internal link with arrow right
      </SecondaryLink>
    </div>
  </ConfigProvider>
);

export const LinkDefault = {
  render: Template,
};
