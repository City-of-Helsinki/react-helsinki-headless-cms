import React from 'react';

import { Card, CardProps } from '../../card/Card';
import styles from '../PageModules.module.scss';

// todo: implement module
export function CardModule(props: CardProps) {
  return (
    <div className={styles.pageModuleWrapper}>
      <Card {...props} direction="responsive-reverse" imageLabel="" />
    </div>
  );
}
