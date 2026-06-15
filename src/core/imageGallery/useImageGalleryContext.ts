import { use } from 'react';

import { ImageGalleryContext } from './ImageGalleryContext';

export default function useImageGalleryContext() {
  const context = use(ImageGalleryContext);
  if (!context) {
    throw new Error(
      `Image gallery components cannot be used outside the ImageGalleryProvider`,
    );
  }
  return context;
}
