import React from "react";

import Grid from "../../common/components/grid/Grid";

export type CardListProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardsList({ children, className }: CardListProps) {
  return (
    <Grid colsCount={3} className={className}>
      {children}
    </Grid>
  );
}
