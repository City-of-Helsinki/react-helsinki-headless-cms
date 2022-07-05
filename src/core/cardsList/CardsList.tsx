import React from 'react';

import Grid from '../../common/components/grid/Grid';

export type CardListProps = {
  children: React.ReactNode;
  className?: string;
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
