import React from 'react';

import { ImageGalleryProvider } from './ImageGalleryProvider';
import { ImagesGrid } from './ImagesGrid';
import { Lightbox } from './Lightbox';
import { ImageItem as ImageItemType } from './types';

export type ImageGalleryProps = {
  images: ImageItemType[];
  lightboxUid: string;
  withBorder?: boolean;
  withLightbox?: boolean;
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
