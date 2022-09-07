import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import hash from '../../common/utils/hash';
import testImage from '../../common/utils/testImage';

export type ResolveImageProps = {
  id?: string;
  url?: string;
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
        await testImage(url);
      } catch {
        setShowFallbackImage(true);
      }
    };
    testThatImageExist();
  }, [url]);

  const randomIndex = Math.abs(hash(id ?? '')) % fallbackImageUrls.length;

  return showFallbackImage
    ? customFallbackUrl ?? fallbackImageUrls[randomIndex]
    : url;
};
