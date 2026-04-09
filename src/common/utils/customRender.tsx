import type { ReactElement } from 'react';
import React from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

import type { Config } from '../../core';
import { ConfigProvider, defaultConfig } from '../../core';

function AllTheProviders({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: Partial<Config>;
}) {
  return (
    <ConfigProvider config={{ ...defaultConfig, ...config }}>
      {children}
    </ConfigProvider>
  );
}

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  config?: Partial<Config>,
) => render(<AllTheProviders config={config}>{ui}</AllTheProviders>, options);
