/* eslint-disable react/function-component-definition */

import React from 'react';
import { IconAngleRight } from 'hds-react';
import type { StoryFn, Meta } from '@storybook/react';

import { Link } from './Link';
import { SecondaryLink } from './SecondaryLink';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import { StoryContainer } from '../storyContainer/StoryContainer';

export default {
  title: 'Core components/Link',
  component: Link,
  subcomponents: { SecondaryLink },
  argTypes: {
    iconRight: { control: { type: null } },
    iconLeft: { control: { type: null } },
  },
} as unknown as Meta<typeof Link>;

const TemplateAll: StoryFn<typeof Link> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
    }}
  >
    <StoryContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link {...args} aria-label="External link" href="https://hel.fi">
          External link
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
        <Link
          {...args}
          aria-label="External link with an image"
          href="https://hel.fi"
        >
          External link with an image
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/City_Branding_of_Helsinki.svg"
              alt="City of Helsinki logo"
              width="200px"
            />
          </span>
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
        <SecondaryLink
          {...args}
          aria-label="External SecondaryLink with an image"
          href="https://hel.fi"
        >
          External secondary link with an image
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/City_Branding_of_Helsinki.svg"
            alt="City of Helsinki logo"
            width="200px"
          />
        </SecondaryLink>
        <SecondaryLink
          {...args}
          aria-label="Internal secondary with arrow right inline icon"
          href="/internal-3"
          variant="arrowRight"
          inlineIcons
          iconRight={<IconAngleRight aria-hidden />}
        >
          Internal secondary with arrow right inline icon
        </SecondaryLink>
        <SecondaryLink
          {...args}
          aria-label="Internal secondary with arrow right icon (not inline)"
          href="/internal-3"
          variant="arrowRight"
          iconRight={<IconAngleRight aria-hidden />}
        >
          Internal secondary with arrow right icon (not inline)
        </SecondaryLink>
      </div>
    </StoryContainer>
  </ConfigProvider>
);

export const LinkAllTypes = {
  render: TemplateAll,
};
