import React from 'react';

import { CarouselContext } from './CarouselContext';
import type {
  CarouselContextComponentPropsType,
  CarouselContextStateType,
} from '../types';
import { initialCarouselContextStateValues } from '../constants';

export type CarouselContextProviderProps = {
  children: React.ReactNode;
  numberOfItems: number;
} & CarouselContextComponentPropsType;

function useCarouselContextState(): Omit<
  CarouselContextStateType,
  'numberOfItems'
> {
  const [isReady] = React.useState<CarouselContextStateType['isReady']>(
    initialCarouselContextStateValues.isReady,
  );
  const [transformValue, setTransformValue] = React.useState<
    CarouselContextStateType['transformValue']
  >(initialCarouselContextStateValues.transformValue);
  const [numberOfSlides, setNumberOfSlides] = React.useState<
    CarouselContextStateType['numberOfSlides']
  >(initialCarouselContextStateValues.numberOfSlides);
  const [itemsPerSlide, setItemsPerSlide] = React.useState<
    CarouselContextStateType['itemsPerSlide']
  >(initialCarouselContextStateValues.itemsPerSlide);
  const [currentSlide, setCurrentSlide] = React.useState<
    CarouselContextStateType['currentSlide']
  >(initialCarouselContextStateValues.currentSlide);
  const [width, setWidth] = React.useState<CarouselContextStateType['width']>(
    initialCarouselContextStateValues.width,
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
