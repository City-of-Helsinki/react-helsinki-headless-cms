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
   * Can the dots be used for navigation
   */
  navigateWithDots?: boolean;
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

export type CarouselContextBackwardCompatibilityProps = Pick<
  CarouselProps<unknown>,
  | 'withDots'
  | 'navigateWithDots'
  | 'onLoadMore'
  | 'hasMore'
  | 'loading'
  | 'loadMoreButtonLabelText'
  | 'title'
> & {
  itemsShownOnDesktop?: CarouselProps<unknown>['itemsDesktop'];
  itemsShownOnMobile?: CarouselProps<unknown>['itemsMobile'];
};

export type CarouselContextStateType = {
  isReady: boolean;
  transformValue: string;
  setTransformValue: (value: string) => void;
  numberOfSlides: number;
  setNumberOfSlides: (value: number) => void;
  itemsPerSlide: number;
  setItemsPerSlide: (value: number) => void;
  currentSlide: number;
  setCurrentSlide: (value: number) => void;
  width: number;
  setWidth: (value: number) => void;
  handleUpdateSlideProps: (value: number) => void;
  numberOfItems: number;
};

export type CarouselContextType = CarouselContextStateType &
  CarouselContextBackwardCompatibilityProps;
