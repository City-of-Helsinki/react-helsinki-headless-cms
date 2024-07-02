/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, IconAngleLeft, IconAngleRight } from 'hds-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Grid from '../../common/components/grid/Grid';
import { useConfig } from '../configProvider/useConfig';
import styles from './imageGallery.module.scss';

export type ImageItem = {
  url: string;
  previewUrl: string;
  photographer: string;
  title?: string;
};

export type ImageGalleryProps = {
  images: ImageItem[];
  withBorder?: boolean;
  withLightbox?: boolean;
  lightboxUid: string | number;
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
  const lightboxRef = useRef(null);
  const barrierRef = useRef(null);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const [initialFocus, setInitialFocus] = useState<boolean>(false);
  const [isLightboxVisible, setIsLightboxVisible] = useState<boolean>(false);

  const {
    copy: { closeButtonLabelText, next, previous },
  } = useConfig();

  const handleEnterKeyPress = (event) => {
    if (withLightbox && event.key === 'Enter') {
      setIsLightboxVisible(true);
    }
  };

  const handleEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsLightboxVisible(false);
    }
  };

  const handleImageCardFocus = (index: number) => {
    setImageIndex(index);
    // selected card index before opening the lightbox
    setSelectedImageIndex(index);
    barrierRef.current?.focus();
    setInitialFocus(true);
  };

  useEffect(() => {
    const lightbox = lightboxRef.current;
    const focusableElements = lightbox?.querySelectorAll(
      'button, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements ? focusableElements[0] : null;
    const lastElement = focusableElements
      ? focusableElements[focusableElements.length - 1]
      : null;

    const handleTabKeyPress = (event) => {
      if (focusableElements && event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          focusableElements[0].focus();
        }
      }
    };

    if (isLightboxVisible) {
      if (!initialFocus) {
        barrierRef.current?.focus();
        setInitialFocus(true);
        lightbox?.addEventListener('keydown', handleTabKeyPress);
        lightbox?.addEventListener('keydown', handleEscapeKeyPress);
      }
    } else {
      setInitialFocus(false);
      lightbox?.removeEventListener('keydown', handleTabKeyPress);
      lightbox?.removeEventListener('keydown', handleEscapeKeyPress);
    }
  }, [
    isLightboxVisible,
    setIsLightboxVisible,
    initialFocus,
    setInitialFocus,
    handleEscapeKeyPress,
  ]);

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
  }, [isLightboxVisible, selectedImageIndex]);

  const toggleLightbox = () => {
    setIsLightboxVisible((prev) => !prev);
  };

  const handleImageCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (withLightbox) {
      toggleLightbox();
    }
  };

  const getLightbox = useCallback(() => {
    const handleNextClick = () => {
      setImageIndex((prev) =>
        imageIndex === images.length - 1 ? 0 : prev + 1,
      );
    };

    const handlePreviousClick = () => {
      setImageIndex((prev) =>
        imageIndex === 0 ? images.length - 1 : prev - 1,
      );
    };
    const imageTitle =
      images[imageIndex].title || images[imageIndex].photographer;
    const imagePhotogrpher = images[imageIndex].photographer;
    const imageUrl = images[imageIndex].url;
    return (
      <div
        id={`${lightboxUid}`}
        role="dialog"
        aria-modal
        aria-labelledby={`${lightboxUid}-title`}
        className={styles.lightbox}
        onClick={toggleLightbox}
        ref={lightboxRef}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.lightboxContent}
          onKeyDown={handleEscapeKeyPress}
        >
          <h2
            id={`${lightboxUid}-title`}
            className={styles.screenReaderText}
            ref={barrierRef}
            tabIndex={-1}
          >
            {imageTitle}
          </h2>
          <figure className={styles.imageCardWrapper} aria-label={imageTitle}>
            <img alt={imageTitle} src={imageUrl} />
          </figure>
          <figcaption className={styles.photographer}>
            {imagePhotogrpher}
          </figcaption>
          <div className={styles.actionsWrapper}>
            <Button
              iconLeft={<IconAngleLeft />}
              onClick={handlePreviousClick}
              theme="black"
              variant="secondary"
            >
              <span className={styles.screenReaderText}>{previous}</span>
            </Button>
            <Button
              iconLeft={<IconAngleRight />}
              onClick={handleNextClick}
              theme="black"
              variant="secondary"
            >
              <span className={styles.screenReaderText}>{next}</span>
            </Button>
          </div>
          <button
            className={styles.closeButton}
            id={`close-${lightboxUid}`}
            type="button"
            aria-controls={lightboxUid.toString()}
            aria-expanded="true"
            onClick={toggleLightbox}
          >
            <span className={styles.screenReaderText}>
              {closeButtonLabelText}
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true" tabIndex={-1} />
          </button>
        </div>
      </div>
    );
  }, [images, imageIndex, closeButtonLabelText, lightboxUid, next, previous]);

  return (
    <>
      {withLightbox && isLightboxVisible && getLightbox()}
      <div ref={gridContainerRef}>
        <Grid colsCount={images.length === 1 ? 1 : columns}>
          {images.map((image, i) => {
            const imageTitle = image.title || image.photographer;
            return (
              <div
                id={`${lightboxUid}-card-${i}`}
                className={classNames(
                  styles.imageItemWrapper,
                  withBorder ? styles.withBorder : '',
                  withLightbox ? styles.withLightbox : '',
                )}
                onClick={handleImageCardClick}
                onKeyDown={handleEnterKeyPress}
                onFocus={() => handleImageCardFocus(i)}
                tabIndex={withLightbox && !isLightboxVisible ? 0 : -1}
              >
                <figure
                  className={classNames(
                    styles.imageCardWrapper,
                    withLightbox ? styles.withLightbox : '',
                  )}
                  aria-label={imageTitle}
                >
                  <img alt={imageTitle} src={image.url} />
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
