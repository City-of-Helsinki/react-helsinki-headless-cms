import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";

import styles from "./collection.module.scss";
import Carousel, { CarouselProps } from "../carousel/Carousel";
import Card from "../card/Card";

export type CollectionProps = {
  title?: string;
  cards: React.ReactElement<typeof Card>[];
  className?: string;
  carouselProps?: Partial<CarouselProps<typeof Card>>;
};

export default function Collection({
  title,
  cards,
  className,
  carouselProps,
}: CollectionProps) {
  return (
    <div className={classNames(styles.collection, className)}>
      <h1 className={styles.heading}>{title}</h1>
      <Carousel className={styles.carousel} {...carouselProps}>
        {cards}
      </Carousel>
    </div>
  );
}
