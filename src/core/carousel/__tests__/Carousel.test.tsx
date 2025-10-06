import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Carousel } from '../Carousel';
import { MOBILE_WIDTH } from '../constants';

// Mock child components to isolate the Carousel's own logic
jest.mock('../components/CarouselSlider', () => ({
  CarouselSlider: ({
    children,
  }: {
    children: React.ReactElement<unknown>[];
  }) => <div data-testid="carousel-slider">{children}</div>,
}));

jest.mock('../components/CarouselSlideButton', () => ({
  CarouselPreviousSlideButton: () => <button type="button">Previous</button>,
  CarouselNextSlideButton: () => <button type="button">Next</button>,
}));

jest.mock('../components/CarouselSliderDot', () => ({
  CarouselSlideDots: () => <div data-testid="carousel-dots" />,
}));

// Mock translation hook
jest.mock('../../translation/useTranslationWithFallback', () => ({
  useTranslationWithFallback: () => ({
    t: (key: string) => {
      if (key === 'carouselRegionLabelText') {
        return 'Carousel: {title}';
      }
      return key;
    },
  }),
}));

const mockItems = [
  <div key="1">Item 1</div>,
  <div key="2">Item 2</div>,
  <div key="3">Item 3</div>,
  <div key="4">Item 4</div>,
  <div key="5">Item 5</div>,
];

// Helper to set window width and fire resize event
const fireResize = (width: number) => {
  act(() => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  });
};

describe('Carousel', () => {
  const originalInnerWidth = window.innerWidth;

  afterEach(() => {
    window.innerWidth = originalInnerWidth;
  });

  it('renders children and the slider', () => {
    render(<Carousel>{mockItems}</Carousel>);
    expect(screen.getByTestId('carousel-slider')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
    expect(screen.getByText('Item 5')).toBeInTheDocument();
  });

  it('renders with a correct ARIA region label', () => {
    const title = 'My Test Carousel';
    render(<Carousel title={title}>{mockItems}</Carousel>);
    expect(
      screen.getByRole('region', { name: `Carousel: ${title}` }),
    ).toBeInTheDocument();
  });

  it('does not render dots by default', () => {
    render(<Carousel>{mockItems}</Carousel>);
    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument();
  });

  it('renders dots when withDots is true and there are multiple slides', () => {
    // 5 items, 4 per slide = 2 slides
    render(
      <Carousel withDots itemsDesktop={4}>
        {mockItems}
      </Carousel>,
    );
    expect(screen.getByTestId('carousel-dots')).toBeInTheDocument();
  });

  it('does not render dots if there is only one slide', () => {
    // 5 items, 5 per slide = 1 slide
    render(
      <Carousel withDots itemsDesktop={5}>
        {mockItems}
      </Carousel>,
    );
    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument();
  });

  it('renders navigation buttons when there are multiple slides', () => {
    // 5 items, 4 per slide = 2 slides
    render(<Carousel itemsDesktop={4}>{mockItems}</Carousel>);
    expect(
      screen.getByRole('button', { name: 'Previous' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });

  it('does not render navigation buttons when there is only one slide', () => {
    // 5 items, 5 per slide = 1 slide
    render(<Carousel itemsDesktop={5}>{mockItems}</Carousel>);
    expect(
      screen.queryByRole('button', { name: 'Previous' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Next' }),
    ).not.toBeInTheDocument();
  });

  describe('responsiveness and slide calculation', () => {
    it('calculates number of slides based on desktop view', () => {
      fireResize(MOBILE_WIDTH + 1); // Desktop width
      const { rerender } = render(
        <Carousel itemsDesktop={2}>{mockItems}</Carousel>,
      );

      // 5 items / 2 per slide = 3 slides. Buttons and dots should show.
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();

      rerender(<Carousel itemsDesktop={5}>{mockItems}</Carousel>);

      // 5 items / 5 per slide = 1 slide. Buttons should disappear.
      expect(
        screen.queryByRole('button', { name: 'Next' }),
      ).not.toBeInTheDocument();
    });

    it('calculates number of slides based on mobile view', () => {
      fireResize(MOBILE_WIDTH); // Mobile width
      const { rerender } = render(
        <Carousel itemsMobile={1}>{mockItems}</Carousel>,
      );

      // 5 items / 1 per slide = 5 slides. Buttons should show.
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();

      rerender(
        <Carousel itemsMobile={2} itemsDesktop={5}>
          {mockItems}
        </Carousel>,
      );

      // 5 items / 2 per slide = 3 slides. Buttons should still show.
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });

    it('re-calculates slides when window is resized', () => {
      // Start with desktop view, 1 slide
      fireResize(MOBILE_WIDTH + 1);
      render(
        <Carousel itemsDesktop={5} itemsMobile={2}>
          {mockItems}
        </Carousel>,
      );
      expect(
        screen.queryByRole('button', { name: 'Next' }),
      ).not.toBeInTheDocument();

      // Resize to mobile, which should result in 3 slides
      fireResize(MOBILE_WIDTH);

      // Buttons should now be visible
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });

    it('calculates number of slides correctly with hasMore prop', () => {
      // 5 items + 1 "load more" slot = 6 items. 3 per slide = 2 slides.
      render(
        <Carousel itemsDesktop={3} hasMore onLoadMore={() => {}}>
          {mockItems}
        </Carousel>,
      );
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });
  });
});
