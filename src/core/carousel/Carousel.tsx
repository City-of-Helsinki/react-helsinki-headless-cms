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
} from './utils/utils';

export type CarouselProps<T> = {
  children: React.ReactElement<T>[];
  itemsDesktop?: 1 | 2 | 3 | 4 | 5;
  itemsMobile?: 1 | 2;
  className?: string;
  withDots?: boolean;
};

export function Carousel({
  children,
  itemsDesktop = 4,
  itemsMobile = 2,
  className = '',
  withDots = true,
}) {
  const MOBILE_WIDTH = 640;
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
      setNumberOfSlides(Math.ceil(children.length / itemsPerSlide));
    }
  }, [itemsPerSlide, children.length]);

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
        {isReady && (
          <div className={styles.root}>
            <div className={styles.slider}>
              <div className={styles.sliderWrapper}>
                <ul
                  className={styles.sliderAnimated}
                  style={{
                    transform: `translateX(${transformValue})`,
                  }}
                >
                  {itemSets.map((itemSet, itemSetIndex) => (
                    <li
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
                </ul>
              </div>
            </div>
            {withDots && (
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
