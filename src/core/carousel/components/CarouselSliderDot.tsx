import React from 'react';
import classNames from 'classnames';

import styles from '../carousel.module.scss';
import { getSlideDotKey } from '../utils/utils';
import { useCarouselContext } from '../context/CarouselContext';

export function CarouselSlideDots() {
  const { numberOfSlides, currentSlide } = useCarouselContext();

  return (
    <div className={styles.dotsContainer}>
      {[...Array(numberOfSlides)].map((e, i) => (
        <div
          key={getSlideDotKey(e, i)}
          className={classNames(
            styles.dot,
            i === currentSlide && styles.selected,
          )}
        />
      ))}
    </div>
  );
}
