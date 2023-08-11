/* eslint-disable react/function-component-definition */

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { PageSection } from './PageSection';
import styles from './pageSection.module.scss';

export default {
  title: 'Core components/PageSection',
  component: PageSection,
} as Meta<typeof PageSection>;

const Template: StoryFn<typeof PageSection> = () => (
  <div>
    <PageSection className={styles.pageSectionGrey}>
      <h1>Default section color cyan</h1>
    </PageSection>
    <PageSection korosTop korosBottom>
      <h1>Section koros top and bottom</h1>
    </PageSection>
    <PageSection className={styles.pageSectionGrey}>
      <h1>Default section color cyan</h1>
    </PageSection>
  </div>
);

export const CardDefault = {
  render: Template,
};
