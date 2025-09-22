import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconAngleLeft, IconAngleRight } from 'hds-react';

import styles from './carousel.module.scss';
import {
  splitArrayIntoChunksOfLen,
  getItemSetItemKey,
  getItemSetKey,
  getSlideDotKey,
  getLoadMoreKey,
} from './utils/utils';
import { useConfig } from '../configProvider/useConfig';
import { LoadingButton } from '../button/LoadingButton';
import type { Card } from '../card/Card';

export type CarouselProps<T = typeof Card> = {
  /**
   * Additional children to render inside the Carousel.
   */
  children: React.ReactElement<T>[];
  /**
   * Number of items to show per one slide on desktop device.
   */
  itemsDesktop?: 1 | 2 | 3 | 4 | 5;
  /**
   * Number of items to show per one slide on mobile device.
   */
  itemsMobile?: 1 | 2;
  /**
   * Additional classname for the card list.
   */
  className?: string;
  /**
   * Boolean indicating whether the Carousel is shown with dots (number of sliders).
   */
  withDots?: boolean;
  /**
   * onLoadMore event handler.
   */
  onLoadMore?: () => void;
  /**
   * Boolean indicating whether the data collection has more items.
   */
  hasMore?: boolean;
  /**
   * Boolean indicating whether the Carousel data is loading.
   */
  loading?: boolean;
  /**
   * Text of load more button.
   */
  loadMoreButtonLabelText?: string;
  /**
   * Title of the carousel component.
   */
  title?: string;
};

export function Carousel({
  children,
  itemsDesktop = 3,
  itemsMobile = 1,
  className = '',
  withDots = true,
  // TODO: onShowAll,
  onLoadMore,
  hasMore,
  loading,
  loadMoreButtonLabelText,
  title,
}: CarouselProps) {
  const MOBILE_WIDTH = 840;
  const [isReady] = useState<boolean>(true);
  const [transformValue, setTransformValue] = useState('0px');
  const [numberOfSlides, setNumberOfSlides] = useState<number>(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const {
    copy: { next, previous },
  } = useConfig();

  const updateDimensions = () => setWidth(window.innerWidth);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setItemsPerSlide(
      Math.ceil(width > MOBILE_WIDTH ? itemsDesktop : itemsMobile),
    );
    setCurrentSlide(0);
    setTransformValue('0px');
  }, [width, itemsDesktop, itemsMobile]);

  useEffect(() => {
    if (itemsPerSlide > 0) {
      const itemsCount =
        hasMore && !!onLoadMore ? children.length + 1 : children.length;
      setNumberOfSlides(Math.ceil(itemsCount / itemsPerSlide));
    }
  }, [itemsPerSlide, hasMore, onLoadMore, children.length]);

  const handleUpdateSlideProps = (value: number): void => {
    if (value === 0) {
      setTransformValue('0px');
    } else {
      setTransformValue(`${value > currentSlide ? '-' : ''}${value}00%`);
    }
    setCurrentSlide(Math.abs(value));
  };

  const handleNextClick = (): void =>
    handleUpdateSlideProps(
      currentSlide + 1 === numberOfSlides ? 0 : currentSlide + 1,
    );

  const handlePrevClick = (): void =>
    handleUpdateSlideProps(
      -(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1),
    );

  const itemSets = React.useMemo(
    () =>
      itemsPerSlide > 0
        ? splitArrayIntoChunksOfLen(children, itemsPerSlide)
        : [],
    [children, itemsPerSlide],
  );

  return (
    <div className={classNames(styles.container, className)}>
      <div role="group" className={styles.carouselWrapper}>
        {numberOfSlides > 1 && (
          <>
            <button
              type="button"
              aria-label={`${previous}${title ? ` - ${title}` : ''}`}
              className={classNames(styles.btn, styles.btnPrev)}
              onClick={handlePrevClick}
              disabled={!isReady}
            >
              <IconAngleLeft />
            </button>
            <button
              type="button"
              aria-label={`${next}${title ? ` - ${title}` : ''}`}
              className={classNames(styles.btn, styles.btnNext)}
              onClick={handleNextClick}
              disabled={!isReady}
            >
              <IconAngleRight />
            </button>
          </>
        )}
        {isReady && (
          <div className={styles.root}>
            <div
              className={classNames(
                styles.slider,
                numberOfSlides === 1 && styles.noDots,
              )}
            >
              <div className={styles.sliderWrapper}>
                <ul
                  className={styles.sliderAnimated}
                  style={{
                    transform: `translateX(${transformValue})`,
                  }}
                >
                  {itemSets.map((itemSet, itemSetIndex) => (
                    <li
                      ref={(node) =>
                        node &&
                        itemSetIndex !== currentSlide &&
                        node.setAttribute('inert', '')
                      }
                      aria-hidden={itemSetIndex !== currentSlide}
                      key={getItemSetKey(
                        itemSetIndex,
                        'id' in itemSet && typeof itemSet.id === 'string'
                          ? itemSet.id
                          : undefined,
                      )}
                      className={classNames(
                        styles.slide,
                        itemSetIndex === currentSlide && styles.slideSelected,
                      )}
                    >
                      <div className={styles.slideItems}>
                        {itemSet.map((item, itemIndex: number) => (
                          <div
                            key={getItemSetItemKey(
                              itemIndex,
                              'id' in itemSet && typeof itemSet.id === 'string'
                                ? itemSet.id
                                : undefined,
                              String(itemSetIndex),
                            )}
                            className={styles.slideItem}
                            style={{
                              width: `${
                                100 /
                                (width > MOBILE_WIDTH
                                  ? itemsDesktop
                                  : itemsMobile)
                              }%`,
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                  {hasMore && !!onLoadMore && (
                    <li key={getLoadMoreKey()}>
                      <div className={styles.onLoadMoreContainer}>
                        <LoadingButton
                          isLoading={Boolean(loading)}
                          onClick={onLoadMore}
                        >
                          {String(loadMoreButtonLabelText)}
                        </LoadingButton>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {withDots && numberOfSlides > 1 && (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
