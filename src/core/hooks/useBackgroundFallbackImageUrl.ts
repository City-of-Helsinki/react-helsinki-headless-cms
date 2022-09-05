import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import hash from '../../common/utils/hash';

export const useBackgroundFallbackImageUrl = (url: string): string => {
  const { fallbackBackgroundImageUrls } = useConfig();

  return React.useMemo(() => {
    const index =
      Math.abs(hash(url ?? '')) % fallbackBackgroundImageUrls.length;
    return fallbackBackgroundImageUrls[index];
  }, [url, fallbackBackgroundImageUrls]);
};
