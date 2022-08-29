/* eslint-disable react/function-component-definition */

import React from 'react';
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
            <Tag variant="card" featured>
              Maksuton
            </Tag>
            <Tag variant="card">Nuoret</Tag>
          </>
        }
        imageLabel="Article"
        target="_blank"
      />
    </div>
  </ConfigProvider>
);

export const CardDefault = Template.bind({});
CardDefault.args = { ...card };
