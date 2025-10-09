import React from 'react';

import { CarouselContext } from './CarouselContext';
import type {
  CarouselContextBackwardCompatibilityProps,
  CarouselContextStateType,
} from '../types';
import { initialCarouselContextValues } from '../constants';

export type CarouselContextProviderProps = {
  children: React.ReactNode;
  numberOfItems: number;
} & CarouselContextBackwardCompatibilityProps;

function useCarouselContextState(): Omit<
  CarouselContextStateType,
  'numberOfItems'
> {
  const [isReady] = React.useState<CarouselContextStateType['isReady']>(
    initialCarouselContextValues.isReady,
  );
  const [transformValue, setTransformValue] = React.useState<
    CarouselContextStateType['transformValue']
  >(initialCarouselContextValues.transformValue);
  const [numberOfSlides, setNumberOfSlides] = React.useState<
    CarouselContextStateType['numberOfSlides']
  >(initialCarouselContextValues.numberOfSlides);
  const [itemsPerSlide, setItemsPerSlide] = React.useState<
    CarouselContextStateType['itemsPerSlide']
  >(initialCarouselContextValues.itemsPerSlide);
  const [currentSlide, setCurrentSlide] = React.useState<
    CarouselContextStateType['currentSlide']
  >(initialCarouselContextValues.currentSlide);
  const [width, setWidth] = React.useState<CarouselContextStateType['width']>(
    initialCarouselContextValues.width,
  );

  const handleUpdateSlideProps: CarouselContextStateType['handleUpdateSlideProps'] =
    (targetSlide: number): void => {
      if (targetSlide === 0) {
        setTransformValue('0px');
      } else {
        // The transform is ALWAYS negative, based purely on the target index.
        setTransformValue(`-${targetSlide}00%`);
      }
      setCurrentSlide(targetSlide);
    };

  return {
    isReady,
    transformValue,
    setTransformValue,
    numberOfSlides,
    setNumberOfSlides,
    itemsPerSlide,
    setItemsPerSlide,
    currentSlide,
    setCurrentSlide,
    width,
    setWidth,
    handleUpdateSlideProps,
  };
}

export function CarouselContextProvider({
  children,
  numberOfItems,
  ...backwardCompatibleProps
}: CarouselContextProviderProps): React.ReactElement {
  const carouselContext = useCarouselContextState();

  const value = React.useMemo(
    () => ({
      numberOfItems,
      ...carouselContext,
      ...backwardCompatibleProps,
    }),
    [numberOfItems, carouselContext, backwardCompatibleProps],
  );
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
