import React from 'react';

import type { Config } from './configContext';
import { ConfigContext } from './configContext';
import { defaultConfig } from './defaultConfig';

export type ConfigProviderProps = {
  /**
   * Global library configuration.
   */
  config: Config;
  /**
   * Additional children to render inside the Config Provider.
   */
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
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
