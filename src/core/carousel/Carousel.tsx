import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, IconAngleLeft, IconAngleRight } from 'hds-react';

import styles from './carousel.module.scss';
import {
  splitArrayIntoChunksOfLen,
  getItemSetItemKey,
  getItemSetKey,
  getSlideDotKey,
  getLoadMoreKey,
} from './utils/utils';
import { type CollectionProps } from '../collection/Collection';

export type CarouselProps<T> = {
  children: React.ReactElement<T>[];
  itemsDesktop?: 1 | 2 | 3 | 4 | 5;
  itemsMobile?: 1 | 2;
  className?: string;
  withDots?: boolean;
  onLoadMore?: CollectionProps['onLoadMore'];
  hasMore?: CollectionProps['hasNext'];
  loading?: CollectionProps['loading'];
  loadMoreButtonLabelText?: string;
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
}) {
  const MOBILE_WIDTH = 720;
  const [isReady] = useState<boolean>(true);
  const [transformValue, setTransformValue] = useState('0px');
  const [numberOfSlides, setNumberOfSlides] = useState<number>(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

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
              className={classNames(styles.btn, styles.btnPrev)}
              onClick={handlePrevClick}
              disabled={!isReady}
            >
              <IconAngleLeft />
            </button>
            <button
              type="button"
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
                !(withDots || numberOfSlides > 1) && styles.noDots,
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
                      key={getItemSetKey(itemSet, itemSetIndex)}
                      className={classNames(
                        styles.slide,
                        itemSetIndex === currentSlide && styles.slideSelected,
                      )}
                    >
                      <div className={styles.slideItems}>
                        {itemSet.map((item, itemIndex) => (
                          <div
                            key={getItemSetItemKey(
                              item,
                              itemSetIndex,
                              itemIndex,
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
