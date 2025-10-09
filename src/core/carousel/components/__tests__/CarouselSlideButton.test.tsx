import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  CarouselNextSlideButton,
  CarouselPreviousSlideButton,
} from '../CarouselSlideButton';
import { CarouselContext } from '../../context/CarouselContext';
import type { CarouselContextType } from '../../types';
import { initialCarouselContextStateValues } from '../../constants';

// Mock the Icon components from hds-react to isolate our button components
jest.mock('hds-react', () => ({
  ...jest.requireActual('hds-react'),
  IconAngleLeft: () => <div data-testid="icon-angle-left" />,
  IconAngleRight: () => <div data-testid="icon-angle-right" />,
}));

// Mock useConfig to provide translations
jest.mock('../../../configProvider/useConfig', () => ({
  useConfig: () => ({
    copy: {
      previous: 'Previous',
      next: 'Next',
    },
  }),
}));

describe('CarouselSlideButton', () => {
  const mockHandleUpdateSlideProps = jest.fn();

  // A helper function to render components with a mock context
  const renderWithContext = (
    ui: React.ReactElement,
    providerProps: Partial<CarouselContextType>,
  ) =>
    render(
      <CarouselContext.Provider
        value={{
          ...initialCarouselContextStateValues,
          // Dummy functions for context fields that require them
          setTransformValue: jest.fn(),
          setNumberOfSlides: jest.fn(),
          setItemsPerSlide: jest.fn(),
          setCurrentSlide: jest.fn(),
          setWidth: jest.fn(),
          // Real mock and provided props
          handleUpdateSlideProps: mockHandleUpdateSlideProps,
          ...providerProps,
        }}
      >
        {ui}
      </CarouselContext.Provider>,
    );

  beforeEach(() => {
    mockHandleUpdateSlideProps.mockClear();
  });

  describe('CarouselPreviousSlideButton', () => {
    it('renders correctly and calls handler on click', () => {
      renderWithContext(<CarouselPreviousSlideButton />, {
        isReady: true,
        currentSlide: 1,
        numberOfSlides: 5,
      });

      const button = screen.getByRole('button', { name: 'Previous' });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
      expect(screen.getByTestId('icon-angle-left')).toBeInTheDocument();

      fireEvent.click(button);
      expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(0);
    });

    it('wraps around to the last slide when on the first slide', () => {
      renderWithContext(<CarouselPreviousSlideButton />, {
        isReady: true,
        currentSlide: 0,
        numberOfSlides: 5,
      });

      fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
      expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(4); // NOTE: 0-index
    });

    it('is disabled when not ready', () => {
      renderWithContext(<CarouselPreviousSlideButton />, { isReady: false });
      expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled();
    });
  });

  describe('CarouselNextSlideButton', () => {
    it('renders correctly and calls handler on click', () => {
      renderWithContext(<CarouselNextSlideButton />, {
        isReady: true,
        currentSlide: 1,
        numberOfSlides: 5,
      });

      const button = screen.getByRole('button', { name: 'Next' });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
      expect(screen.getByTestId('icon-angle-right')).toBeInTheDocument();

      fireEvent.click(button);
      expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(2);
    });

    it('wraps around to the first slide when on the last slide', () => {
      renderWithContext(<CarouselNextSlideButton />, {
        isReady: true,
        currentSlide: 4,
        numberOfSlides: 5,
      });

      fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      expect(mockHandleUpdateSlideProps).toHaveBeenCalledWith(0);
    });
  });
});
