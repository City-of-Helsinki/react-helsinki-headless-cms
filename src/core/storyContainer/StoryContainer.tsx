import React from 'react';

import styles from './storyContainer.module.scss';

export type StoryContainerProps = {
  children: React.ReactNode;
  maxWidth?: number;
};

export function StoryContainer({ children, maxWidth }: StoryContainerProps) {
  return (
    <div className={styles.wrapper} style={{ maxWidth: maxWidth || '' }}>
      {children}
    </div>
  );
}
