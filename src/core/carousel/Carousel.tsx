import React, { useEffect } from 'react';
import classNames from 'classnames';

import styles from './carousel.module.scss';
import { initialCarouselContextStateValues, MOBILE_WIDTH } from './constants';
import { useCarouselContext } from './context/CarouselContext';
import { CarouselContextProvider } from './context/CarouselContextProvider';
import { CarouselSlider } from './components/CarouselSlider';
import {
  CarouselNextSlideButton,
  CarouselPreviousSlideButton,
} from './components/CarouselSlideButton';
import { CarouselSlideDots } from './components/CarouselSliderDot';
import type { CarouselProps } from './types';
import { useTranslationWithFallback } from '../translation/useTranslationWithFallback';

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

function useCarouselRegionAriaLabel() {
  const { title } = useCarouselContext();
  const { t } = useTranslationWithFallback();
  return t('carouselRegionLabelText').replace('{title}', title ?? '');
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
  } = useCarouselContext();

  const carouselAriaLabel = useCarouselRegionAriaLabel();

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
    <div
      className={classNames(styles.container, className)}
      role="region"
      aria-label={carouselAriaLabel}
    >
      <div role="group" className={styles.carouselWrapper}>
        {numberOfSlides > 1 && (
          <>
            <CarouselPreviousSlideButton />
            <CarouselNextSlideButton />
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
              <CarouselSlider>{items}</CarouselSlider>
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
  itemsDesktop = initialCarouselContextStateValues.itemsShownOnDesktop,
  itemsMobile = initialCarouselContextStateValues.itemsShownOnMobile,
  ...restOfBackwardCompatibleProps
}: CarouselProps<unknown>) {
  return (
    <CarouselContextProvider
      itemsShownOnDesktop={itemsDesktop}
      itemsShownOnMobile={itemsMobile}
      numberOfItems={items.length}
      {...restOfBackwardCompatibleProps}
    >
      <CarouselWithContext className={className}>{items}</CarouselWithContext>
    </CarouselContextProvider>
  );
}
