import React from 'react';
import { Button } from 'hds-react';

import styles from '../carousel.module.scss';
import { splitArrayIntoChunksOfLen, getLoadMoreKey } from '../utils/utils';
import { useCarouselContext } from '../context/CarouselContext';
import { CarouselSliderPage } from './CarouselSliderPage';
import type { CarouselProps } from '../types';

export function CarouselSlider({
  children: items,
  loading,
  onLoadMore,
  hasMore,
  loadMoreButtonLabelText,
}: Pick<
  CarouselProps<unknown>,
  | 'children'
  | 'itemsDesktop'
  | 'itemsMobile'
  | 'loading'
  | 'onLoadMore'
  | 'hasMore'
  | 'loadMoreButtonLabelText'
>) {
  const { transformValue, itemsPerSlide } = useCarouselContext();

  const itemSets = React.useMemo(
    () =>
      itemsPerSlide > 0 ? splitArrayIntoChunksOfLen(items, itemsPerSlide) : [],
    [items, itemsPerSlide],
  );
  return (
    <div className={styles.sliderWrapper} role="region">
      <ul
        className={styles.sliderAnimated}
        style={{
          transform: `translateX(${transformValue})`,
        }}
      >
        {itemSets.map((itemSet, itemSetIndex) => (
          <CarouselSliderPage itemSet={itemSet} itemSetIndex={itemSetIndex} />
        ))}
        {hasMore && !!onLoadMore && (
          <li key={getLoadMoreKey()}>
            <div className={styles.onLoadMoreContainer}>
              <Button
                isLoading={loading}
                onClick={onLoadMore}
                variant="primary"
              >
                {loadMoreButtonLabelText}
              </Button>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
