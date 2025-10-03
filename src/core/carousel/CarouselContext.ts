import React from 'react';

import { initialCarouselContextValues } from './constants';
import type { CarouselContextType } from './types';

const throwFieldImplError = (fieldName: string) => {
  throw new Error(
    `${fieldName} is still unimplemented, when it should be implemented`,
  );
};

export const CarouselContext = React.createContext<CarouselContextType>({
  ...initialCarouselContextValues,
  setTransformValue() {
    throwFieldImplError('setTransformValue');
  },
  setNumberOfSlides() {
    throwFieldImplError('setNumberOfSlides');
  },
  setItemsPerSlide() {
    throwFieldImplError('setItemsPerSlide');
  },
  setCurrentSlide() {
    throwFieldImplError('setCurrentSlide');
  },
  setWidth() {
    throwFieldImplError('setWidth');
  },
  handleUpdateSlideProps() {
    throwFieldImplError('handleUpdateSlideProps');
  },
});

export function useCarouselContext() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error(
      `Carousel components cannot be rendered outside the CarouselContextProvider`,
    );
  }
  return context;
}
