/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import CardsList from './CardsList';
import { Card } from '../card/Card';
import card from '../card/__mocks__/card.mock';
import { ConfigProvider } from '../configProvider/ConfigProvider';
import { defaultConfig } from '../configProvider/defaultConfig';

export default {
  title: 'Core components/CardsList',
  component: CardsList,
  subcomponents: { Card },
  argTypes: {
    children: { control: { type: null } },
  },
} as Meta<typeof CardsList>;

const Template: StoryFn<typeof CardsList> = (args) => (
  <div style={{ margin: 24, overflow: 'hidden' }}>
    <CardsList {...args} />
  </div>
);

export const CardListDefault = {
  render: Template,

  args: {
    children: (
      <ConfigProvider
        config={{
          ...defaultConfig,
          siteName: 'RHHC Example',
          internalHrefOrigins: [],
        }}
      >
        <Card {...card} hasLink />
        <Card {...card} hasLink />
        <Card {...card} hasLink />
        <Card {...card} hasLink />
        <Card {...card} hasLink />
        <Card {...card} hasLink />
        <Card {...card} hasLink />
      </ConfigProvider>
    ),
  },
};
