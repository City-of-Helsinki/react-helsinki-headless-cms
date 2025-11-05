/* eslint-disable no-plusplus */
/* eslint-disable react/function-component-definition */

import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-webpack5';

import Grid from './Grid';
import { StoryContainer } from '../../../core/storyContainer/StoryContainer';

export default {
  title: 'Common components/Grid',
  component: Grid,
} as Meta<typeof Grid>;

const Template: StoryFn<typeof Grid> = (args) => {
  const getCellContent = (i: number) => (
    <div
      style={{
        backgroundColor: '#333',
        padding: 4,
        color: 'white',
        textAlign: 'center',
      }}
    >{`Grid cell content ${i + 1}`}</div>
  );
  const content = [];
  for (let i = 0; i < 12; i++) {
    content.push(getCellContent(i));
  }
  return (
    <StoryContainer>
      <Grid {...args}>{content}</Grid>
    </StoryContainer>
  );
};

export const GridDefault = {
  render: Template,
  args: {},
};
