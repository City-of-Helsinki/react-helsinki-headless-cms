import type {
  CarouselContextComponentPropsType,
  CarouselContextType,
} from './types';

export const MOBILE_WIDTH = 840;

// NOTE: Would it be better to leave all these undefined?
// For some reason VSCode is always showing them as defined,
// when the context is being used,
// eventhough they would be explicitly set to undefined.
const initialCarouselContextProps: CarouselContextComponentPropsType = {
  itemsShownOnDesktop: 3,
  itemsShownOnMobile: 1,
  withDots: false,
  navigateWithDots: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLoadMore: () => {},
  hasMore: false,
  loading: false,
  loadMoreButtonLabelText: '',
  title: '',
};

export const initialCarouselContextStateValues = {
  isReady: true,
  transformValue: '0px',
  numberOfSlides: 0,
  itemsPerSlide: 0,
  currentSlide: 0,
  width: 0,
  numberOfItems: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleUpdateSlideProps: () => {},
  ...initialCarouselContextProps,
} as const satisfies Omit<
  CarouselContextType,
  | 'setTransformValue'
  | 'setNumberOfSlides'
  | 'setItemsPerSlide'
  | 'setCurrentSlide'
  | 'setWidth'
>;
