import React from 'react';
import classNames from 'classnames';

import styles from './grid.module.scss';

export interface GridProps {
  /**
   * Additional children to render inside the grid.
   */
  children: React.ReactNode;
  /**
   * Number of grid columns.
   */
  colsCount?: number;
  /**
   * Additional classname for grid container.
   */
  className?: string;
}

export default function Grid({
  colsCount = 3,
  children,
  className,
}: GridProps) {
  return (
    <div
      className={classNames(styles.grid, styles[`cols${colsCount}`], className)}
    >
      {children}
    </div>
  );
}
