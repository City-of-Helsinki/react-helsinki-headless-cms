import React from 'react';

import { CarouselContext } from './CarouselContext';
import type {
  CarouselContextBackwardCompatibilityProps,
  CarouselContextStateType,
} from '../types';
import { initialCarouselContextValues } from '../constants';

export type CarouselContextProviderProps = {
  children: React.ReactNode;
} & CarouselContextBackwardCompatibilityProps;

function useCarouselContextState(): CarouselContextStateType {
  const [isReady] = React.useState<boolean>(
    initialCarouselContextValues.isReady,
  );
  const [transformValue, setTransformValue] = React.useState<string>(
    initialCarouselContextValues.transformValue,
  );
  const [numberOfSlides, setNumberOfSlides] = React.useState<number>(
    initialCarouselContextValues.numberOfSlides,
  );
  const [itemsPerSlide, setItemsPerSlide] = React.useState<number>(
    initialCarouselContextValues.itemsPerSlide,
  );
  const [currentSlide, setCurrentSlide] = React.useState<number>(
    initialCarouselContextValues.currentSlide,
  );
  const [width, setWidth] = React.useState<number>(
    initialCarouselContextValues.width,
  );

  const handleUpdateSlideProps = (value: number) => {
    if (value === 0) {
      setTransformValue('0px');
    } else {
      setTransformValue(`${value > currentSlide ? '-' : ''}${value}00%`);
    }
    setCurrentSlide(Math.abs(value));
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
  ...backwardCompatibleProps
}: CarouselContextProviderProps): React.ReactElement {
  const carouselContext = useCarouselContextState();

  const value = React.useMemo(
    () => ({
      ...carouselContext,
      ...backwardCompatibleProps,
    }),
    [carouselContext, backwardCompatibleProps],
  );
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
