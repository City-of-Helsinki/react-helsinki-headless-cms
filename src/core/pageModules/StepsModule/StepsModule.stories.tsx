/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { StepsModule } from './StepsModule';
import { SELECT_COLORS } from '../constants';

export default {
  title: 'Core components/StepsModule module',
  component: StepsModule,
  args: {
    title: "Steps title",
    helpText: "Steps description",
    color: "tram",
    steps: [
              {title: "First step", content: "First step content"},
              {title: "Second step", content: "Second step content"}, 
              {title: "Third step", content: "Third step content"}
          ],
    type: "numbers",
  },
  argTypes: { 
    type: { 
      control: 'radio', 
      options: ['numbers', 'bullets'] 
    },
    color: { 
      control: 'select', 
      options:  SELECT_COLORS
    }
  }
} as Meta<typeof StepsModule>;

const Template: StoryFn<typeof StepsModule> = (args) => (
    <div style={{margin: 24}}>
      <StepsModule {...args} />
    </div>
);

export const StepsModuleDefault = {
  render: Template,
};
