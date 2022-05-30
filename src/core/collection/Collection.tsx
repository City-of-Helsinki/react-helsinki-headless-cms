import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";

import styles from "./collection.module.scss";
import { Carousel, CarouselProps } from "../carousel/Carousel";
import { Card } from "../card/Card";
import Grid, { GridProps } from "../../common/components/grid/Grid";

export type CollectionProps = {
  title?: string;
  cards: React.ReactElement<typeof Card>[];
  className?: string;
  collectionContainerProps?:
    | Partial<CarouselProps<typeof Card>>
    | Partial<GridProps>;
  type: "carousel" | "grid";
};

export function CollectionGrid({
  cards,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
}) {
  return (
    <div className={styles.gridWrapper}>
      <Grid className={styles.grid} {...rest}>
        {cards}
      </Grid>
    </div>
  );
}

export function CollectionCarousel({
  cards,
  ...rest
}: {
  cards: React.ReactElement<typeof Card>[];
}) {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel className={styles.carousel} {...rest}>
        {cards}
      </Carousel>
    </div>
  );
}

export function Collection({
  title,
  cards,
  className,
  collectionContainerProps,
  type = "grid",
}: CollectionProps) {
  const componentForType: Record<CollectionProps["type"], JSX.Element> = {
    carousel: (
      <CollectionCarousel cards={cards} {...collectionContainerProps} />
    ),
    grid: <CollectionGrid cards={cards} {...collectionContainerProps} />,
  };

  return (
    <div
      className={classNames(styles.collectionWrapper, styles[type], className)}
    >
      <div className={styles.collection}>
        {title && <h1 className={styles.heading}>{title}</h1>}
        {componentForType[type]}
      </div>
    </div>
  );
}
