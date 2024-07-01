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
  const lightboxRef = useRef(null);
  const barrierRef = useRef(null);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [initialFocus, setInitialFocus] = useState<boolean>(false);
  const [isLightboxVisible, setIsLightboxVisible] = useState<boolean>(false);

  const {
    copy: { closeButtonLabelText, next, previous },
  } = useConfig();

  useEffect(() => {
    if (isLightboxVisible) {
      const lightbox = lightboxRef.current;
      const focusableElements = lightbox.querySelectorAll(
        'button, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            focusableElements[0].focus();
          }
        }
      };

      const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
          setIsLightboxVisible(false);
        }
      };

      if (!initialFocus) {
        barrierRef.current.focus();
        setInitialFocus(true);
      } else {
        lightbox.addEventListener('keydown', handleTabKeyPress);
        lightbox.addEventListener('keydown', handleEscapeKeyPress);
      }

      return () => {
        lightbox.removeEventListener('keydown', handleTabKeyPress);
        lightbox.removeEventListener('keydown', handleEscapeKeyPress);
      };
    } else {
      setInitialFocus(false);
    }
  }, [isLightboxVisible, setIsLightboxVisible, initialFocus, setInitialFocus]);

  const toggleLightbox = () => {
    setIsLightboxVisible((prev) => !prev);
  };

  const handleImageCardClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (withLightbox) {
      toggleLightbox();
    }
  };

  const handleNextClick = () => {
    setImageIndex((prev) => {
      return imageIndex === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePreviousClick = () => {
    setImageIndex((prev) => {
      return imageIndex === 0 ? images.length - 1 : prev - 1;
    });
  };

  const getLightbox = useCallback(() => {
    const imageTitle =
      images[imageIndex].title || images[imageIndex].photographer;
    const imagePhotogrpher = images[imageIndex].photographer;
    const imageUrl = images[imageIndex].url;
    return (
      <div
        id={`${lightboxUid}`}
        role="dialog"
        aria-modal={true}
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
            <svg viewBox="0 0 24 24" aria-hidden="true" tabIndex={-1}></svg>
          </button>
        </div>
      </div>
    );
  }, [images, imageIndex]);

  return (
    <>
      {withLightbox && isLightboxVisible && getLightbox()}
      <Grid colsCount={images.length === 1 ? 1 : columns}>
        {images.map((image) => {
          const imageTitle = image.title || image.photographer;
          return (
            <div
              className={classNames(
                styles.imageItemWrapper,
                withBorder ? styles.withBorder : '',
              )}
            >
              <figure
                className={styles.imageCardWrapper}
                aria-label={imageTitle}
              >
                <img alt={imageTitle} src={image.previewUrl} />
                <a
                  onClick={handleImageCardClick}
                  className={styles.link}
                  href="#"
                  aria-label={imageTitle}
                ></a>
              </figure>
              <figcaption className={styles.photographer}>
                {image.photographer}
              </figcaption>
            </div>
          );
        })}
      </Grid>
    </>
  );
}
