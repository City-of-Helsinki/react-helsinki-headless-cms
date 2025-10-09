import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CarouselSlider } from '../CarouselSlider';
import { CarouselContext } from '../../context/CarouselContext';
import type { CarouselContextType } from '../../types';
import { initialCarouselContextValues } from '../../constants';

jest.mock('../../../translation/useTranslationWithFallback', () => ({
  useTranslationWithFallback: () => ({
    t: (key: string) => {
      if (key === 'carouselSliderRegionLabelText') {
        return 'In carousel slide {currentSlide}. Listing 1 - {itemsPerSlide} items per slide out of {numberOfItems} items.';
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
        handleUpdateSlideProps: jest.fn(),
        ...providerProps,
      }}
    >
      {ui}
    </CarouselContext.Provider>,
  );

describe('CarouselSlider', () => {
  const mockItems = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
    <div key="5">Item 5</div>,
  ];

  it('renders the correct number of pages based on itemsPerSlide', () => {
    renderWithContext(<CarouselSlider>{mockItems}</CarouselSlider>, {
      itemsPerSlide: 2,
    });
    const pages = screen.getAllByRole('listitem', { hidden: true });
    expect(pages).toHaveLength(3); // 5 items, 2 per slide = 3 pages
    expect(pages[0]).toHaveTextContent('Item 1');
    expect(pages[0]).toHaveTextContent('Item 2');
    expect(pages[2]).toHaveTextContent('Item 5');
  });

  it('applies the transform style from context', () => {
    renderWithContext(<CarouselSlider>{mockItems}</CarouselSlider>, {
      transformValue: '-200%',
      itemsPerSlide: 1,
    });

    const sliderList = screen.getByRole('presentation');
    expect(sliderList).toHaveStyle('transform: translateX(-200%)');
  });

  it('generates the correct aria-label', () => {
    renderWithContext(<CarouselSlider>{mockItems}</CarouselSlider>, {
      itemsPerSlide: 3,
      currentSlide: 1, // second slide
      numberOfItems: 5,
    });

    const expectedLabel =
      'In carousel slide 2. Listing 1 - 3 items per slide out of 5 items.';
    expect(screen.getByLabelText(expectedLabel)).toBeInTheDocument();
  });

  describe('Load More Button', () => {
    const mockOnLoadMore = jest.fn();

    beforeEach(() => {
      mockOnLoadMore.mockClear();
    });

    it('renders the load more button when hasMore is true', () => {
      renderWithContext(
        <CarouselSlider>{[...mockItems].splice(4, 1)}</CarouselSlider>,
        {
          itemsPerSlide: 5,
          hasMore: true,
          onLoadMore: mockOnLoadMore,
          loadMoreButtonLabelText: 'Load More',
        },
      );

      expect(
        screen.getByRole('button', { name: 'Load More' }),
      ).toBeInTheDocument();
    });

    it('does not render the load more button when hasMore is false', () => {
      renderWithContext(<CarouselSlider>{mockItems}</CarouselSlider>, {
        itemsPerSlide: 5,
        hasMore: false,
        onLoadMore: mockOnLoadMore,
        loadMoreButtonLabelText: 'Load More',
      });

      expect(
        screen.queryByRole('button', { name: 'Load More' }),
      ).not.toBeInTheDocument();
    });

    it('calls onLoadMore when the button is clicked', () => {
      renderWithContext(
        <CarouselSlider>{[...mockItems].splice(4, 1)}</CarouselSlider>,
        {
          itemsPerSlide: 5,
          hasMore: true,
          onLoadMore: mockOnLoadMore,
          loadMoreButtonLabelText: 'Load More',
        },
      );

      fireEvent.click(screen.getByRole('button'));
      expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
    });
  });
});
