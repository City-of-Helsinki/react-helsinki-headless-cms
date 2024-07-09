/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import React, { useCallback, useEffect, useRef } from 'react';
import { Button, IconAngleLeft, IconAngleRight } from 'hds-react';

import { ImageItem } from './types';
import styles from './imageGallery.module.scss';
import { useConfig } from '../configProvider/useConfig';
import useImageGalleryContext from './useImageGalleryContext';

interface LightboxProps {
  images: ImageItem[];
  lightboxUid: string;
}

interface CloseButtonProps {
  lightboxUid: string;
}

interface ActionsProps {
  images: ImageItem[];
}

export function Lightbox({ images, lightboxUid }: LightboxProps) {
  const lightboxRef = useRef(null);
  const barrierRef = useRef(null);

  const { isLightboxVisible, imageIndex, toggleLightbox } =
    useImageGalleryContext();

  const handleEscapeKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleLightbox();
      }
    },
    [toggleLightbox],
  );

  useEffect(() => {
    const lightbox = lightboxRef.current;
    if (!lightbox) return undefined;

    const focusableElements = lightbox.querySelectorAll(
      'button, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements ? focusableElements[0] : null;
    const lastElement = focusableElements
      ? focusableElements[focusableElements.length - 1]
      : null;

    const handleTabKeyPress = (event: React.KeyboardEvent) => {
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
      barrierRef.current?.focus();
      lightbox.addEventListener('keydown', handleTabKeyPress);
      lightbox.addEventListener('keydown', handleEscapeKeyPress);
    }

    return () => {
      lightbox?.removeEventListener('keydown', handleTabKeyPress);
      lightbox?.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [isLightboxVisible, handleEscapeKeyPress]);

  const imageTitle =
    images[imageIndex].title || images[imageIndex].photographer;
  const imagePhotogrpher = images[imageIndex].photographer;
  const imageUrl = images[imageIndex].url;

  const renderLightboxComponent = (): JSX.Element => (
    <div
      id={lightboxUid}
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
        <div className={styles.inner}>
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
          <figcaption
            className={classNames(styles.photographer, styles.withMargin)}
          >
            {imagePhotogrpher}
          </figcaption>
          {images.length > 1 && <Lightbox.Actions images={images} />}
          <Lightbox.CloseButton lightboxUid={lightboxUid} />
        </div>
      </div>
    </div>
  );

  return isLightboxVisible
    ? ReactDOM.createPortal(renderLightboxComponent(), document.body)
    : null;
}

function Actions({ images }: ActionsProps) {
  const { imageIndex, setImageIndex } = useImageGalleryContext();
  const handleNextClick = () => {
    setImageIndex((prev) => (imageIndex === images.length - 1 ? 0 : prev + 1));
  };

  const handlePreviousClick = () => {
    setImageIndex((prev) => (imageIndex === 0 ? images.length - 1 : prev - 1));
  };

  const {
    copy: { previous, next },
  } = useConfig();
  return (
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
  );
}

function CloseButton({ lightboxUid }: CloseButtonProps) {
  const { toggleLightbox } = useImageGalleryContext();

  const {
    copy: { closeButtonLabelText },
  } = useConfig();
  return (
    <button
      className={styles.closeButton}
      id={`close-${lightboxUid}`}
      type="button"
      aria-controls={lightboxUid.toString()}
      aria-expanded="true"
      onClick={toggleLightbox}
    >
      <span className={styles.screenReaderText}>{closeButtonLabelText}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" tabIndex={-1} />
    </button>
  );
}

Lightbox.Actions = Actions;
Lightbox.CloseButton = CloseButton;
