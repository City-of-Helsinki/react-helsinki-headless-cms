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
  /**
   * A flag indicating whether the carousel has been initialized and is ready.
   * Useful for preventing interactions before measurements are complete.
   * @type {boolean}
   */
  isReady: boolean;
  /**
   * The CSS `transform` value (e.g., 'translateX(-200%)') applied
   * to the slider track to position the current slide in the viewport.
   * @type {string}
   */
  transformValue: string;
  /**
   * Sets the CSS `transform` value for the slider track.
   * @param {string} value - The new CSS transform string.
   * @returns {void}
   */
  setTransformValue: (value: string) => void;
  /**
   * The total number of slides in the carousel.
   * @type {number}
   */
  numberOfSlides: number;
  /**
   * Sets the total number of slides.
   * @param {number} value - The new total number of slides.
   * @returns {void}
   */
  setNumberOfSlides: (value: number) => void;
  /**
   * The number of individual items to display per slide.
   * @type {number}
   */
  itemsPerSlide: number;
  /**
   * Sets the number of items to display per slide.
   * @param {number} value - The new number of items per slide.
   * @returns {void}
   */
  setItemsPerSlide: (value: number) => void;
  /**
   * The zero-based index of the currently active slide.
   * @type {number}
   */
  currentSlide: number;
  /**
   * Sets the index of the currently active slide.
   * @param {number} value - The new active slide index.
   * @returns {void}
   */
  setCurrentSlide: (value: number) => void;
  /**
   * The measured width of the carousel container in pixels.
   * @type {number}
   */
  width: number;
  /**
   * Sets the measured width of the carousel container.
   * @param {number} value - The new width in pixels.
   * @returns {void}
   */
  setWidth: (value: number) => void;
  /**
   * Updates the CSS transform value and the current slide index for a slider component.
   *
   * @description This function calculates the necessary CSS `transform` value to move
   * to a target slide. It sets the transform to '0px' for the first slide (index 0).
   * For all other slides, it calculates a percentage-based transform (`value * 100%`).
   * The direction of the translation (positive or negative) is determined by comparing
   * the target slide `value` with the `currentSlide` state. It then updates the
   * state for the transform value and the current slide index.
   *
   * @param {number} targetSlide - The zero-based index of the target slide.
   * @returns {void} This function does not return a value.
   *
   * @example
   * // Assume currentSlide is 1, and we want to move to slide 3:
   * handleUpdateSlideProps(3);
   * // setTransformValue will be called with '-300%'
   * // setCurrentSlide will be called with 3
   *
   * @example
   * // Assume we want to go back to the first slide:
   * handleUpdateSlideProps(0);
   * // setTransformValue will be called with '0px'
   * // setCurrentSlide will be called with 0
   */
  handleUpdateSlideProps: (targetSlide: number) => void;
  /**
   * The total number of individual items provided to the carousel.
   * This is used along with `itemsPerSlide` to calculate `numberOfSlides`.
   * @type {number}
   */
  numberOfItems: number;
};

export type CarouselContextType = CarouselContextStateType &
  CarouselContextBackwardCompatibilityProps;
