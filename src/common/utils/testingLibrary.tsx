import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ConfigProvider, defaultConfig, Config } from '../../core';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  config?: Partial<Config>,
) => {
  function AllTheProviders({ children }) {
    return (
      <ConfigProvider config={{ ...defaultConfig, ...config }}>
        {children}
      </ConfigProvider>
    );
  }
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
export { default as userEvent } from '@testing-library/user-event';
