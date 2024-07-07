import React, { useEffect, useRef } from 'react';

import useImageGalleryContext from './useImageGalleryContext';
import Grid from '../../common/components/grid/Grid';
import { ImageItem } from './ImageItem';
import { ImageItem as ImageItemType } from './types';

interface ImagesGridProps {
  images: ImageItemType[];
  columns: number;
  lightboxUid: string;
  withBorder: boolean;
  withLightbox: boolean;
}

export function ImagesGrid({
  images,
  columns,
  lightboxUid,
  withLightbox,
  withBorder,
}: ImagesGridProps) {
  const { isLightboxVisible, selectedImageIndex } = useImageGalleryContext();

  const gridContainerRef = useRef(null);

  useEffect(() => {
    if (!isLightboxVisible && selectedImageIndex !== -1) {
      const gridContainer = gridContainerRef.current;
      const selectedCard = gridContainer?.querySelector(
        `[id="${lightboxUid}-card-${selectedImageIndex}"]`,
      );
      if (selectedCard) {
        selectedCard?.focus();
      }
    }
  }, [isLightboxVisible, selectedImageIndex, lightboxUid]);

  return (
    <div ref={gridContainerRef}>
      <Grid colsCount={images.length === 1 ? 1 : columns}>
        {images.map((image, i) => (
          <ImageItem
            imageId={i}
            image={image}
            lightboxUid={lightboxUid}
            withLightbox={withLightbox}
            withBorder={withBorder}
          />
        ))}
      </Grid>
    </div>
  );
}
