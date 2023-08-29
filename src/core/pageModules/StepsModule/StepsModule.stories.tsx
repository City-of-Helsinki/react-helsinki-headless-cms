/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { StepsModule } from './StepsModule';
import { SELECT_COLORS } from '../constants';
import { RANDOM_CONTENT } from '../../../constants';

export default {
  title: 'Core components/Steps module',
  component: StepsModule,
  args: {
    title: 'Steps title',
    helpText: 'Steps description',
    color: 'suomenlinna',
    steps: [
      { title: 'First step', content: 'First step content' },
      { title: 'Second step', content: 'Second step content' },
      { title: 'Third step', content: 'Third step content' },
    ],
    type: 'numbers',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['numbers', 'bullets'],
    },
    color: {
      control: 'select',
      options: SELECT_COLORS,
    },
  },
} as Meta<typeof StepsModule>;

const Template: StoryFn<typeof StepsModule> = (args) => (
  <div style={{ margin: 24 }}>
    <div>{RANDOM_CONTENT}</div>
    <StepsModule {...args} />
    <div>{RANDOM_CONTENT}</div>
  </div>
);

export const StepsModuleDefault = {
  render: Template,
};
