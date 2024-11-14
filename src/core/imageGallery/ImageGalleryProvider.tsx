import type { ReactNode } from 'react';
import React, { useCallback, useState } from 'react';

import { ImageGalleryContext } from './ImageGalleryContext';

interface ImageGalleryProviderProps {
  children: ReactNode;
}

export function ImageGalleryProvider({ children }: ImageGalleryProviderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const toggleLightbox = useCallback(() => {
    setIsLightboxVisible((prev) => !prev);
  }, [setIsLightboxVisible]);

  const config = React.useMemo(
    () => ({
      imageIndex,
      setImageIndex,
      selectedImageIndex,
      setSelectedImageIndex,
      isLightboxVisible,
      setIsLightboxVisible,
      toggleLightbox,
    }),
    [imageIndex, isLightboxVisible, selectedImageIndex, toggleLightbox],
  );

  return (
    <ImageGalleryContext.Provider value={config}>
      {children}
    </ImageGalleryContext.Provider>
  );
}
