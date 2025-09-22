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
  const [showFallbackImage, setShowFallbackImage] = React.useState(false);

  React.useEffect(() => {
    const testThatImageExist = async () => {
      try {
        await testImage(url ?? undefined);
      } catch {
        setShowFallbackImage(true);
      }
    };
    if (url) {
      testThatImageExist();
    } else {
      setShowFallbackImage(true);
    }
  }, [url]);

  const randomIndex = Math.abs(hash(id ?? '')) % fallbackImageUrls.length;

  return !url || showFallbackImage
    ? (customFallbackUrl ?? fallbackImageUrls[randomIndex])
    : url;
};
