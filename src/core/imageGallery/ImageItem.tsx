/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React from 'react';

import { ImageItem as ImageItemType } from './types';
import styles from './imageGallery.module.scss';
import useImageGalleryContext from './useImageGalleryContext';

interface ImageItemProps {
  image: ImageItemType;
  imageId: number;
  lightboxUid: string;
  withBorder: boolean;
  withLightbox: boolean;
}

export function ImageItem({
  image,
  imageId,
  lightboxUid,
  withLightbox,
  withBorder,
}: ImageItemProps) {
  const {
    isLightboxVisible,
    setIsLightboxVisible,
    setImageIndex,
    setSelectedImageIndex,
    toggleLightbox,
  } = useImageGalleryContext();

  const handleImageCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (withLightbox) {
      toggleLightbox();
    }
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent) => {
    if (withLightbox && event.key === 'Enter') {
      setIsLightboxVisible(true);
    }
  };

  const handleImageCardFocus = (index: number) => {
    setImageIndex(index);
    // selected card index before opening the lightbox
    setSelectedImageIndex(index);
  };

  const imageTitle = image.title || image.photographer;

  return (
    <div
      className={classNames(
        styles.imageItemWrapper,
        withLightbox ? styles.withLightbox : '',
      )}
      onClick={handleImageCardClick}
    >
      <figure
        className={classNames(
          styles.imageCardWrapper,
          withLightbox ? styles.withLightbox : '',
        )}
        aria-label={imageTitle}
      >
        <div
          tabIndex={withLightbox && !isLightboxVisible ? 0 : -1}
          id={`${lightboxUid}-card-${imageId}`}
          className={classNames(
            styles.imageWrapper,
            withBorder ? styles.withBorder : '',
            withLightbox ? styles.withLightbox : '',
          )}
          style={{ backgroundImage: `url(${image.url}` }}
          onFocus={() => handleImageCardFocus(imageId)}
          onKeyDown={handleEnterKeyPress}
        />
      </figure>
      <figcaption className={styles.photographer}>
        {image.photographer}
      </figcaption>
    </div>
  );
}
