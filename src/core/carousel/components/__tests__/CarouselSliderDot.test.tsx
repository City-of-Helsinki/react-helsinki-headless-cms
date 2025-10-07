import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CarouselSlideDots } from '../CarouselSliderDot';
import { CarouselContext } from '../../context/CarouselContext';
import type { CarouselContextType } from '../../types';
import { initialCarouselContextValues } from '../../constants';

jest.mock('../../../translation/useTranslationWithFallback', () => ({
  useTranslationWithFallback: () => ({
    t: (key: string) => {
      if (key === 'carouselSliderDotNavLabelText') {
        return 'Jump to slide {slideNumber}';
      }
      return key;
    },
  }),
}));

// A helper function to render components with a mock context
const renderWithContext = (
  ui: React.ReactElement,
  providerProps: Partial<CarouselContextType>,
) =>
  render(
    <CarouselContext.Provider
      value={{
        ...initialCarouselContextValues,
        // Dummy functions for context fields that require them
        setTransformValue: jest.fn(),
        setNumberOfSlides: jest.fn(),
        setItemsPerSlide: jest.fn(),
        setCurrentSlide: jest.fn(),
        setWidth: jest.fn(),
        ...providerProps,
      }}
    >
      {ui}
    </CarouselContext.Provider>,
  );

describe('CarouselSlideDots', () => {
  const mockHandleUpdateSlideProps = jest.fn();

  beforeEach(() => {
    mockHandleUpdateSlideProps.mockClear();
  });

  it('renders the correct number of dots and highlights the active one', () => {
    renderWithContext(<CarouselSlideDots />, {
      numberOfSlides: 5,
      currentSlide: 2,
      handleUpdateSlideProps: mockHandleUpdateSlideProps,
      navigateWithDots: true,
    });

    const dots = screen.getAllByRole('button');
    expect(dots).toHaveLength(5);

    // The third dot (index 2) should be the selected one
    expect(dots[2]).toHaveClass('selected');
    expect(dots[1]).not.toHaveClass('selected');
  });

  it('calls handler with positive index when navigating forward', () => {
    renderWithContext(<CarouselSlideDots />, {
      numberOfSlides: 5,
      currentSlide: 1,
      handleUpdateSlideProps: mockHandleUpdateSlideProps,
      navigateWithDots: true,
    });

    fireEvent.click(screen.getByLabelText('Jump to slide 4'));
    expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(3);
  });

  it('calls handler with negative index when navigating backward', () => {
    renderWithContext(<CarouselSlideDots />, {
      numberOfSlides: 5,
      currentSlide: 3,
      handleUpdateSlideProps: mockHandleUpdateSlideProps,
      navigateWithDots: true,
    });

    fireEvent.click(screen.getByLabelText('Jump to slide 2'));
    expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(-1);
  });

  it('does not call handler when clicking the active dot', () => {
    renderWithContext(<CarouselSlideDots />, {
      numberOfSlides: 5,
      currentSlide: 2,
      handleUpdateSlideProps: mockHandleUpdateSlideProps,
      navigateWithDots: true,
    });

    fireEvent.click(screen.getByLabelText('Jump to slide 3'));
    expect(mockHandleUpdateSlideProps).not.toHaveBeenCalled();
  });

  it('disables dots and sets aria-hidden when navigateWithDots is false', () => {
    renderWithContext(<CarouselSlideDots />, {
      numberOfSlides: 5,
      currentSlide: 0,
      handleUpdateSlideProps: mockHandleUpdateSlideProps,
      navigateWithDots: false,
    });

    const container = screen.getByRole('navigation', { hidden: true });
    expect(container).toHaveAttribute('aria-hidden', 'true');

    const dots = screen.getAllByRole('button', { hidden: true });
    dots.forEach((dot) => expect(dot).toBeDisabled());
  });
});
