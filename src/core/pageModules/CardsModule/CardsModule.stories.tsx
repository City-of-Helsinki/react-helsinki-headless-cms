/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CardsModule } from './CardsModule';

export default {
  title: 'Core components/Cards module',
  component: CardsModule,
} as Meta<typeof CardsModule>;

const items = [
  {
    title: 'Card title',
    description: 'Description',
    link: { target: '_blank', title: 'link title', url: 'https://hel.fi' },
    backgroundColor: 'fog',
    icon: '1',
  },
  {
    title: 'Card title',
    description: 'Description',
    link: { target: '_blank', title: 'link title', url: 'https://hel.fi' },
    backgroundColor: 'fog',
    icon: '1',
  },
];

const Template: StoryFn<typeof CardsModule> = () => (
  <div style={{ margin: 24 }}>
    <CardsModule items={items} />
  </div>
);

export const CardsModuleDefault = {
  render: Template,
};
