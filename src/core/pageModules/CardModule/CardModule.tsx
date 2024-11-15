import React from 'react';

import type { CardProps } from '../../card/Card';
import { Card } from '../../card/Card';
import styles from '../pageModules.module.scss';

// todo: implement module
export function CardModule(props: CardProps) {
  return (
    <div className={styles.pageModuleWrapper}>
      <Card
        {...props}
        direction="responsive-reverse"
        imageLabel=""
        withBorder
        hasLink={false}
        clampText={false}
      />
    </div>
  );
}
