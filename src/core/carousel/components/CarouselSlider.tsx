import React from 'react';
import { Button } from 'hds-react';

import styles from '../carousel.module.scss';
import { splitArrayIntoChunksOfLen, getLoadMoreKey } from '../utils/utils';
import { useCarouselContext } from '../context/CarouselContext';
import { CarouselSliderPage } from './CarouselSliderPage';
import type { CarouselProps } from '../types';
import { useTranslationWithFallback } from '../../translation/useTranslationWithFallback';

function useCarouselSliderRegionAriaLabel() {
  const { itemsPerSlide, currentSlide, numberOfItems } = useCarouselContext();
  const { t } = useTranslationWithFallback();

  return t('carouselSliderRegionLabelText')
    .replace('{itemsPerSlide}', String(itemsPerSlide))
    .replace('{numberOfItems}', String(numberOfItems))
    .replace('{currentSlide}', String(currentSlide + 1));
}

function CarouselLoadMoreButton() {
  const { onLoadMore, loading, loadMoreButtonLabelText } = useCarouselContext();
  return (
    <div className={styles.onLoadMoreContainer}>
      <Button
        isLoading={loading}
        onClick={onLoadMore}
        variant="primary"
        role="button"
      >
        {loadMoreButtonLabelText}
      </Button>
    </div>
  );
}

export function CarouselSlider({
  children,
}: Pick<CarouselProps<unknown>, 'children'>) {
  const { transformValue, itemsPerSlide, onLoadMore, hasMore } =
    useCarouselContext();

  const shouldShowLoadMoreButton = hasMore && !!onLoadMore;

  const items = React.useMemo(
    () =>
      shouldShowLoadMoreButton
        ? [...children, <CarouselLoadMoreButton key={getLoadMoreKey()} />]
        : children,
    [children, shouldShowLoadMoreButton],
  );

  const itemSets = React.useMemo(
    () =>
      itemsPerSlide > 0 ? splitArrayIntoChunksOfLen(items, itemsPerSlide) : [],
    [items, itemsPerSlide],
  );

  const ariaLabel = useCarouselSliderRegionAriaLabel();

  return (
    <div className={styles.sliderWrapper} data-testid="carousel-slider">
      <ul
        className={styles.sliderAnimated}
        style={{
          transform: `translateX(${transformValue})`,
        }}
        aria-label={ariaLabel}
        role="presentation"
      >
        {itemSets.map((itemSet, itemSetIndex) => (
          <CarouselSliderPage itemSet={itemSet} itemSetIndex={itemSetIndex} />
        ))}
      </ul>
    </div>
  );
}
