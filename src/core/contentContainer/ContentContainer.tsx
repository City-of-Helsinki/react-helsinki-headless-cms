import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './contentContainer.module.scss';

export type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentContainer({
  className,
  children,
}: ContentContainerProps) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}
