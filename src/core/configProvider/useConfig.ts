import { useContext } from 'react';

import { Config, configContext } from './configContext';

const validateContext = (config?: Config) => {
  if (config === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  if (config.fallbackImageUrls?.length === 0) {
    throw new Error('add at least one fallback background image for events');
  }
};

export function useConfig() {
  const config = useContext(configContext);
  validateContext(config);

  return config;
}
