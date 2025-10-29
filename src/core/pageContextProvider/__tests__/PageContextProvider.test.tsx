import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PageContextProvider } from '../PageContextProvider';
import { usePageContext } from '../usePageContext';
import type { PageType } from '../../../common/headlessService/types';

// A test component that consumes the context
function TestConsumer() {
  const context = usePageContext();
  return <div data-testid="context-value">{JSON.stringify(context)}</div>;
}

describe('PageContextProvider', () => {
  it('should render children components', () => {
    render(
      <PageContextProvider page={null}>
        <div data-testid="child">Hello World</div>
      </PageContextProvider>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should provide the context value to its children', () => {
    const testContextValue: PageType = {
      id: 'test-page-id',
      uri: '/test-page',
    };
    render(
      <PageContextProvider page={testContextValue}>
        <TestConsumer />
      </PageContextProvider>,
    );

    const consumerElement = screen.getByTestId('context-value');
    expect(consumerElement).toHaveTextContent(JSON.stringify(testContextValue));
  });

  it('should handle a null context value', () => {
    render(
      <PageContextProvider page={null}>
        <TestConsumer />
      </PageContextProvider>,
    );

    const consumerElement = screen.getByTestId('context-value');
    expect(consumerElement).toHaveTextContent(JSON.stringify({ page: null }));
  });

  it('should return the initial context value when used outside a provider', () => {
    render(<TestConsumer />);

    const consumerElement = screen.getByTestId('context-value');
    // Assuming the initial context value is { page: null }
    expect(consumerElement).toHaveTextContent(JSON.stringify({ page: null }));
  });

  it('should update the context value when the page prop changes', () => {
    const initialPage: PageType = {
      id: 'test-page-id',
      uri: '/initial-page',
    };
    const { rerender } = render(
      <PageContextProvider page={initialPage}>
        <TestConsumer />
      </PageContextProvider>,
    );
    expect(screen.getByTestId('context-value')).toHaveTextContent(
      JSON.stringify({ page: initialPage }),
    );

    const updatedPage: PageType = { id: 'test-page-id', uri: '/updated-page' };
    rerender(
      <PageContextProvider page={updatedPage}>
        <TestConsumer />
      </PageContextProvider>,
    );
    expect(screen.getByTestId('context-value')).toHaveTextContent(
      JSON.stringify({ page: updatedPage }),
    );
  });
});
