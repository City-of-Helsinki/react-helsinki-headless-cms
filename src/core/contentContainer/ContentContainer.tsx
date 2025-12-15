import React from 'react';
import classNames from 'classnames';

import styles from './contentContainer.module.scss';

export type ContentContainerProps = {
  /**
   * Additional children to render inside the Content container.
   */
  children: React.ReactNode;
  /**
   * Additinal classname applied to the Content container.
   */
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
