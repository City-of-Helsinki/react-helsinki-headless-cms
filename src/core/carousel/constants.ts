import type {
  CarouselContextBackwardCompatibilityProps,
  CarouselContextType,
} from './types';

export const MOBILE_WIDTH = 840;

// NOTE: Would it be better to leave all these undefined?
// For some reason VSCode is always showing them as defined,
// when the context is being used,
// eventhough they would be explicitly set to undefined.
const initialBackwardCompatibilityProps: CarouselContextBackwardCompatibilityProps =
  {
    itemsShownOnDesktop: 3,
    itemsShownOnMobile: 1,
    withDots: false,
    onLoadMore: () => {},
    hasMore: false,
    loading: false,
    loadMoreButtonLabelText: '',
    title: '',
  };

export const initialCarouselContextValues = {
  isReady: true,
  transformValue: '0px',
  numberOfSlides: 0,
  itemsPerSlide: 0,
  currentSlide: 0,
  width: 0,
  numberOfItems: 0,
  handleUpdateSlideProps: () => {},
  ...initialBackwardCompatibilityProps,
} as const satisfies Omit<
  CarouselContextType,
  | 'setTransformValue'
  | 'setNumberOfSlides'
  | 'setItemsPerSlide'
  | 'setCurrentSlide'
  | 'setWidth'
>;
