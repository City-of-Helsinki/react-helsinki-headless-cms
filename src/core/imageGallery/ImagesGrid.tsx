import React, { useEffect, useRef } from 'react';

import useImageGalleryContext from './useImageGalleryContext';
import Grid from '../../common/components/grid/Grid';
import { ImageItem } from './ImageItem';
import type { ImageItem as ImageItemType } from './types';

interface ImagesGridProps {
  /**
   * Array of Image items.
   */
  images: ImageItemType[];
  /**
   * Number of columns in Image grid.
   */
  columns: number;
  /**
   * Image lightbox uid.
   */
  lightboxUid: string;
  /**
   *  Boolean indicating whether the border styles should be applied to the Image.
   */
  withBorder: boolean;
  /**
   *  Boolean indicating whether the lightbox feature is enabled.
   */
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

  const gridContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isLightboxVisible && selectedImageIndex !== -1) {
      const gridContainer = gridContainerRef.current;
      const selectedCard = gridContainer?.querySelector<HTMLElement>(
        `[id="${lightboxUid}-card-${selectedImageIndex}"]`,
      );
      if (selectedCard) {
        selectedCard.focus();
      }
    }
  }, [isLightboxVisible, selectedImageIndex, lightboxUid]);

  return (
    <div ref={gridContainerRef}>
      <Grid colsCount={images.length === 1 ? 1 : columns}>
        {images.map((image, i) => (
          <ImageItem
            // eslint-disable-next-line react/no-array-index-key
            key={`grid-image-${i}`}
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
