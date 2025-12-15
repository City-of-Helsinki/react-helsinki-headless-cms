import type { ReactElement } from 'react';
import React from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

import type { Config } from '../../core';
import { ConfigProvider, defaultConfig } from '../../core';

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  config?: Partial<Config>,
) => {
  function AllTheProviders({ children }: { children: React.ReactNode }) {
    return (
      <ConfigProvider config={{ ...defaultConfig, ...config }}>
        {children}
      </ConfigProvider>
    );
  }
  return render(ui, { wrapper: AllTheProviders, ...options });
};
