import React from 'react';

import Grid from '../../common/components/grid/Grid';

export type CardListProps = {
  /**
   * Additional children to render inside the card list.
   */
  children: React.ReactNode;
  /**
   * Additional classname for the card list.
   */
  className?: string;
  /**
   * Card list columns number.
   */
  colsCount?: number;
};

export default function CardsList({
  children,
  className,
  colsCount = 3,
}: CardListProps) {
  return (
    <Grid colsCount={colsCount} className={className}>
      {children}
    </Grid>
  );
}
