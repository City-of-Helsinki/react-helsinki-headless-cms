/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CardsModule } from './CardsModule';

export default {
  title: 'Core components/Cards module',
  component: CardsModule,
} as Meta<typeof CardsModule>;

const Template: StoryFn<typeof CardsModule> = () => (
  <div>
    <CardsModule />
  </div>
);

export const CardsModuleDefault = {
  render: Template,
};
