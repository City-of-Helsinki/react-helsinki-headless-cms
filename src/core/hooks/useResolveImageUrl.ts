import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import hash from '../../common/utils/hash';
import testImage from '../../common/utils/testImage';

export type ResolveImageProps = {
  id?: string;
  url?: string | null;
  customFallbackUrl?: string;
};

export const useResolveImageUrl = ({
  id,
  url,
  customFallbackUrl,
}: ResolveImageProps): string => {
  const { fallbackImageUrls } = useConfig();
  const [failedUrl, setFailedUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    if (url) {
      testImage(url)
        .then(() => {
          if (!cancelled) setFailedUrl(null);
        })
        .catch(() => {
          if (!cancelled) setFailedUrl(url);
        });
    }
    return () => {
      cancelled = true;
    };
  }, [url]);

  const randomIndex = Math.abs(hash(id ?? '')) % fallbackImageUrls.length;

  return !url || failedUrl === url
    ? (customFallbackUrl ?? fallbackImageUrls[randomIndex])
    : url;
};
