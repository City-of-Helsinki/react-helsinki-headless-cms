/* eslint-disable react/function-component-definition */

import React, { CSSProperties } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';
import card from './__mocks__/card.mock';
import { Card } from './Card';
import { Tag } from '../../common/components/tag/Tag';

export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const linkArrowLabelStyles = {
  '--link-arrow-label-color': 'red',
} as CSSProperties;

const Template: ComponentStory<typeof Card> = (args) => (
  <ConfigProvider
    config={{
      ...defaultConfig,
      siteName: 'RHHC Example',
      components: {
        ...defaultConfig.components,
      },
    }}
  >
    <div style={{ maxWidth: 420, margin: 24 }}>
      <Card
        {...args}
        hasLink
        withShadow
        customContent={
          <>
            <Tag featured>Free</Tag>
            <Tag>Youth</Tag>
          </>
        }
        imageLabel="Article"
        openLinkInNewTab
      />
      <Card {...args} title="Fallback image" />
    </div>
  </ConfigProvider>
);

export const CardDefault = Template.bind({});
CardDefault.args = {
  ...card,
  linkArrowLabel: 'This gives a label for the link arrow',
  style: linkArrowLabelStyles,
};
