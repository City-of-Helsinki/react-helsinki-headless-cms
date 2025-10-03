import React, { useEffect } from 'react';
import classNames from 'classnames';

import styles from './carousel.module.scss';
import { MOBILE_WIDTH } from './constants';
import { useCarouselContext } from './context/CarouselContext';
import { CarouselContextProvider } from './context/CarouselContextProvider';
import { CarouselSlider } from './components/CarouselSlider';
import {
  CarouselNextSlideButton,
  CarouselPreviousSlideButton,
} from './components/CarouselSlideButton';
import { CarouselSlideDots } from './components/CarouselSliderDot';

export type CarouselProps<T> = {
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

function useCarouselDimensions() {
  const { setWidth } = useCarouselContext();
  const updateDimensions = () => setWidth(window.innerWidth);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function CarouselWithContext({
  children: items,
  className = '',
}: Pick<CarouselProps<unknown>, 'className' | 'children'>) {
  const {
    isReady,
    setTransformValue,
    numberOfSlides,
    setNumberOfSlides,
    itemsPerSlide,
    setItemsPerSlide,
    setCurrentSlide,
    width,
    itemsShownOnDesktop,
    itemsShownOnMobile,
    withDots,
    onLoadMore,
    hasMore,
    loading,
    loadMoreButtonLabelText,
    title,
  } = useCarouselContext();

  useCarouselDimensions();

  useEffect(() => {
    setItemsPerSlide(
      Math.ceil(
        width > MOBILE_WIDTH ? itemsShownOnDesktop : itemsShownOnMobile,
      ),
    );
    setCurrentSlide(0);
    setTransformValue('0px');
  }, [
    width,
    itemsShownOnDesktop,
    itemsShownOnMobile,
    setItemsPerSlide,
    setCurrentSlide,
    setTransformValue,
  ]);

  useEffect(() => {
    if (itemsPerSlide > 0) {
      const itemsCount =
        hasMore && !!onLoadMore ? items.length + 1 : items.length;
      setNumberOfSlides(Math.ceil(itemsCount / itemsPerSlide));
    }
  }, [itemsPerSlide, hasMore, onLoadMore, items.length, setNumberOfSlides]);

  return (
    <div className={classNames(styles.container, className)}>
      <div role="group" className={styles.carouselWrapper}>
        {numberOfSlides > 1 && (
          <>
            <CarouselPreviousSlideButton title={title} />
            <CarouselNextSlideButton title={title} />
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
              <CarouselSlider
                loading={loading}
                onLoadMore={onLoadMore}
                hasMore={hasMore}
                loadMoreButtonLabelText={loadMoreButtonLabelText}
              >
                {items}
              </CarouselSlider>
            </div>
            {withDots && numberOfSlides > 1 && <CarouselSlideDots />}
          </div>
        )}
      </div>
    </div>
  );
}

export function Carousel({
  children: items,
  className = '',
  itemsDesktop: itemsShownOnDesktop = 3,
  itemsMobile: itemsShownOnMobile = 1,
  ...restOfBackwardCompatibleProps
}: CarouselProps<unknown>) {
  return (
    <CarouselContextProvider
      itemsShownOnDesktop={itemsShownOnDesktop}
      itemsShownOnMobile={itemsShownOnMobile}
      numberOfItems={items.length}
      {...restOfBackwardCompatibleProps}
    >
      <CarouselWithContext className={className}>{items}</CarouselWithContext>
    </CarouselContextProvider>
  );
}
