export type CarouselContextBackwardCompatibilityProps = {
  itemsShownOnDesktop?: number;
  itemsShownOnMobile?: number;
  withDots?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  loadMoreButtonLabelText?: string;
  title?: string;
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
