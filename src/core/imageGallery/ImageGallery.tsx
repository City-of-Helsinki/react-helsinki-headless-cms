/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import Grid from '../../common/components/grid/Grid';
import styles from './imageGallery.module.scss';
import { Lightbox } from './Lightbox';
import { ImageItem } from './types';

export type ImageGalleryProps = {
  images: ImageItem[];
  withBorder?: boolean;
  withLightbox?: boolean;
  lightboxUid: string;
  columns?: number;
};

export function ImageGallery({
  images,
  withBorder = false,
  withLightbox = true,
  lightboxUid,
  columns = 5,
}: ImageGalleryProps) {
  const gridContainerRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

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

  const toggleLightbox = () => {
    setIsLightboxVisible((prev) => !prev);
  };

  const handleNextClick = () => {
    setImageIndex((prev) => (imageIndex === images.length - 1 ? 0 : prev + 1));
  };

  const handlePreviousClick = () => {
    setImageIndex((prev) => (imageIndex === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (withLightbox) {
      toggleLightbox();
    }
  };

  return (
    <>
      {withLightbox && (
        <Lightbox
          lightboxUid={lightboxUid}
          images={images}
          imageIndex={imageIndex}
          isLightboxVisible={isLightboxVisible}
          onClick={toggleLightbox}
          onNextClick={handleNextClick}
          onPreviousClick={handlePreviousClick}
          onEscapeClick={toggleLightbox}
        />
      )}
      <div ref={gridContainerRef}>
        <Grid colsCount={images.length === 1 ? 1 : columns}>
          {images.map((image, i) => {
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
                    id={`${lightboxUid}-card-${i}`}
                    className={classNames(
                      styles.imageWrapper,
                      withBorder ? styles.withBorder : '',
                      withLightbox ? styles.withLightbox : '',
                    )}
                    style={{ backgroundImage: `url(${image.url}` }}
                    onFocus={() => handleImageCardFocus(i)}
                    onKeyDown={handleEnterKeyPress}
                  />
                </figure>
                <figcaption className={styles.photographer}>
                  {image.photographer}
                </figcaption>
              </div>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
