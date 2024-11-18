import React from 'react';

import { ImageGalleryProvider } from './ImageGalleryProvider';
import { ImagesGrid } from './ImagesGrid';
import { Lightbox } from './Lightbox';
import type { ImageItem as ImageItemType } from './types';

export type ImageGalleryProps = {
  /**
   * Image gallery items.
   */
  images: ImageItemType[];
  /**
   * Image gallery lightbox component uid.
   */
  lightboxUid: string;
  /**
   *  Boolean indicating whether the border styles should be applied to the Image.
   */
  withBorder?: boolean;
  /**
   *  Boolean indicating whether the lightbox feature is enabled.
   */
  withLightbox?: boolean;
  /**
   * Number of columns in Image gallery.
   */
  columns?: number;
};

export function ImageGallery({
  images,
  withBorder = false,
  withLightbox = true,
  lightboxUid,
  columns = 5,
}: ImageGalleryProps) {
  return (
    <ImageGalleryProvider>
      {withLightbox && <Lightbox lightboxUid={lightboxUid} images={images} />}
      <ImagesGrid
        images={images}
        columns={columns}
        lightboxUid={lightboxUid}
        withBorder={withBorder}
        withLightbox={withLightbox}
      />
    </ImageGalleryProvider>
  );
}
