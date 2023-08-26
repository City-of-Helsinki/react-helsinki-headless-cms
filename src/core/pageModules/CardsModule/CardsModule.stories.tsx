/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CardsModule } from './CardsModule';
import { SELECT_COLORS } from '../constants';

export default {
  title: 'Core components/Cards module',
  component: CardsModule,
} as Meta<typeof CardsModule>;

const getItems = () => {
  const items = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    items.push({
      title: `Card title ${i + 1}`,
      description:
        'Haluatko järjestää liikuntatapahtuman tai etsitkö harjoitusvuoroa seurallesi? Helsingissä on runsaasti erilaisia ja erikokoisia liikuntatiloja, joita voi varata maksutta.',
      link: { target: '_blank', title: 'link title', url: 'https://hel.fi' },
      backgroundColor:
        SELECT_COLORS[Math.floor(Math.random() * SELECT_COLORS.length)],
      icon: 'alert-circle',
    });
  }
  return items;
};

const items = getItems();

const Template: StoryFn<typeof CardsModule> = () => (
  <div style={{ margin: 24 }}>
    <h2>1 Item</h2>
    <CardsModule items={items.slice(0, 1)} />
    <h2>Up to 3 items</h2>
    <CardsModule items={items.slice(0, 3)} />
    <h2>4+ items</h2>
    <CardsModule items={items} />
  </div>
);

export const CardsModuleDefault = {
  render: Template,
};
