import React from 'react';
import classNames from 'classnames';
import { IconAngleLeft, IconAngleRight } from 'hds-react';

import styles from '../carousel.module.scss';
import { useConfig } from '../../configProvider/useConfig';
import { useCarouselContext } from '../CarouselContext';
import type { CarouselProps } from '../Carousel';

export function CarouselPreviousSlideButton({
  title,
}: Pick<CarouselProps<unknown>, 'title'>) {
  const {
    copy: { previous },
  } = useConfig();
  const { isReady, numberOfSlides, currentSlide, handleUpdateSlideProps } =
    useCarouselContext();

  const handlePrevClick = (): void =>
    handleUpdateSlideProps(
      -(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1),
    );

  return (
    <button
      type="button"
      aria-label={`${previous}${title ? ` - ${title}` : ''}`}
      className={classNames(styles.btn, styles.btnPrev)}
      onClick={handlePrevClick}
      disabled={!isReady}
    >
      <IconAngleLeft />
    </button>
  );
}

export function CarouselNextSlideButton({
  title,
}: Pick<CarouselProps<unknown>, 'title'>) {
  const {
    copy: { next },
  } = useConfig();
  const { isReady, numberOfSlides, currentSlide, handleUpdateSlideProps } =
    useCarouselContext();

  const handleNextClick = (): void =>
    handleUpdateSlideProps(
      currentSlide + 1 === numberOfSlides ? 0 : currentSlide + 1,
    );

  return (
    <button
      type="button"
      aria-label={`${next}${title ? ` - ${title}` : ''}`}
      className={classNames(styles.btn, styles.btnNext)}
      onClick={handleNextClick}
      disabled={!isReady}
    >
      <IconAngleRight />
    </button>
  );
}
