import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CarouselSliderPage } from '../CarouselSliderPage';
import { CarouselContext } from '../../context/CarouselContext';
import type { CarouselContextType } from '../../types';
import { initialCarouselContextValues, MOBILE_WIDTH } from '../../constants';

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

describe('CarouselSliderPage', () => {
  const mockItems = [<div key="1">Item 1</div>, <div key="2">Item 2</div>];

  it('renders correctly as the current (active) slide', () => {
    renderWithContext(
      <CarouselSliderPage itemSet={mockItems} itemSetIndex={0} />,
      {
        currentSlide: 0,
        width: 1024,
        itemsShownOnDesktop: 2,
      },
    );

    const slide = screen.getByRole('listitem');
    expect(slide).not.toHaveAttribute('inert');
    expect(slide).toHaveAttribute('aria-hidden', 'false');
    expect(slide).toHaveClass('slideSelected');

    // Check children are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders correctly as an inactive slide', () => {
    renderWithContext(
      <CarouselSliderPage itemSet={mockItems} itemSetIndex={1} />,
      {
        currentSlide: 0,
        width: 1024,
        itemsShownOnDesktop: 2,
      },
    );

    const slide = screen.getByRole('listitem', { hidden: true });
    expect(slide).toHaveAttribute('inert');
    expect(slide).toHaveAttribute('aria-hidden', 'true');
    expect(slide).not.toHaveClass('slideSelected');
  });

  it('calculates item width correctly for desktop view', () => {
    renderWithContext(
      <CarouselSliderPage itemSet={mockItems} itemSetIndex={0} />,
      {
        currentSlide: 0,
        width: MOBILE_WIDTH + 1,
        itemsShownOnDesktop: 4,
      },
    );

    const slideItems = screen.getAllByText(/Item/i);
    slideItems.forEach((item) => {
      expect(item.parentElement).toHaveStyle('width: 25%'); // 100 / 4
    });
  });

  it('calculates item width correctly for mobile view', () => {
    renderWithContext(
      <CarouselSliderPage itemSet={mockItems} itemSetIndex={0} />,
      {
        currentSlide: 0,
        width: MOBILE_WIDTH,
        itemsShownOnMobile: 2,
      },
    );

    const slideItems = screen.getAllByText(/Item/i);
    slideItems.forEach((item) => {
      expect(item.parentElement).toHaveStyle('width: 50%'); // 100 / 2
    });
  });
});
