import React from 'react';
import classNames from 'classnames';

import styles from '../carousel.module.scss';
import { getSlideDotKey } from '../utils/utils';
import { useCarouselContext } from '../context/CarouselContext';
import { useTranslationWithFallback } from '../../translation/useTranslationWithFallback';

function CarouselSlideDot({ slideIndex }: { slideIndex: number }) {
  const { currentSlide, handleUpdateSlideProps, navigateWithDots } =
    useCarouselContext();

  const { t } = useTranslationWithFallback();

  const onClickHandler = (targetSlide: number): void => {
    if (targetSlide === currentSlide) {
      return;
    }
    handleUpdateSlideProps(targetSlide);
  };
  const dotButtonAriaLabel = t('carouselSliderDotNavLabelText').replace(
    '{slideNumber}',
    String(slideIndex + 1),
  );

  return (
    <button
      className={classNames(styles.dot, {
        [styles.selected]: slideIndex === currentSlide,
        [styles.button]: navigateWithDots,
      })}
      onClick={() => onClickHandler(slideIndex)}
      tabIndex={0}
      type="button"
      aria-label={dotButtonAriaLabel}
      disabled={!navigateWithDots}
    />
  );
}

export function CarouselSlideDots() {
  const { numberOfSlides, navigateWithDots } = useCarouselContext();

  return (
    <div
      className={styles.dotsContainer}
      role="navigation"
      aria-hidden={!navigateWithDots}
      data-testid="carousel-dots"
    >
      {[...Array(numberOfSlides)].map((entry, slideIndex) => (
        <CarouselSlideDot
          key={getSlideDotKey(entry, slideIndex)}
          slideIndex={slideIndex}
        />
      ))}
    </div>
  );
}
