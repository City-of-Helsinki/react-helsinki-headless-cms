import React from 'react';

import type { Config } from './configContext';
import { configContext } from './configContext';
import { defaultConfig } from './defaultConfig';

export type ConfigProviderProps = {
  config: Config;
  children: React.ReactNode;
};

export function ConfigProvider({
  config: userConfig,
  children,
}: ConfigProviderProps) {
  const config = React.useMemo(
    () => ({
      ...defaultConfig,
      ...userConfig,
    }),
    [userConfig],
  );

  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}
