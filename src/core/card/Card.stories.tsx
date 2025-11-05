/* eslint-disable react/function-component-definition */

import type { CSSProperties } from 'react';
import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import card from './__mocks__/card.mock';
import { Card } from './Card';
import { Tag } from '../../common/components/tag/Tag';
import { StoryContainer } from '../storyContainer/StoryContainer';

export default {
  title: 'Core components/Card',
  component: Card,
} as Meta<typeof Card>;

const linkArrowLabelStyles = {
  '--link-arrow-label-color': 'red',
} as CSSProperties;

const Template: StoryFn<typeof Card> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
      components: {
        ...defaultConfig.components,
      },
    }}
  >
    <StoryContainer maxWidth={640}>
      <Card withBorder hasLink openLinkInNewTab {...args} />
    </StoryContainer>
  </ConfigProvider>
);

export const CardDefaultResponsive = {
  render: Template,
  args: {
    ...card,
  },
};

export const CardWithCustomTagsContent = {
  render: Template,
  args: {
    ...card,
    customContent: (
      <>
        <Tag featured>Free</Tag>
        <Tag>Youth</Tag>
        <Tag>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          viverra urna.
        </Tag>
        <Tag>Sport</Tag>
      </>
    ),
  },
};

export const CardWithLinkLabel = {
  render: Template,
  args: {
    ...card,
    linkArrowLabel: 'This gives a label for the link arrow',
    style: linkArrowLabelStyles,
  },
};

export const CardWithShadow = {
  render: Template,
  args: {
    ...card,
    withShadow: true,
  },
};

export const CardWithImageLabel = {
  render: Template,
  args: {
    ...card,
    imageLabel: 'This is a custom image label',
  },
};

export const CardCentered = {
  render: Template,
  args: {
    ...card,
    alignment: 'center-left',
    text: 'Custom text contents',
  },
};

export const CardDelimited = {
  render: Template,
  args: {
    ...card,
    alignment: 'delimited-left',
    withBorder: false,
    text: 'Custom text contents',
    direction: 'responsive-reverse',
  },
};
