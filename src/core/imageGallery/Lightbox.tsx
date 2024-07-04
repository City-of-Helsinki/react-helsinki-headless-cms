/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, IconAngleLeft, IconAngleRight } from 'hds-react';

import { ImageItem } from './types';
import styles from './imageGallery.module.scss';
import { useConfig } from '../configProvider/useConfig';

interface LightboxProps {
  images: ImageItem[];
  imageIndex: number;
  isLightboxVisible: boolean;
  lightboxUid: string;
  onClick: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
  onEscapeClick: () => void;
}

export function Lightbox({
  images,
  imageIndex,
  isLightboxVisible,
  lightboxUid,
  onClick,
  onNextClick,
  onPreviousClick,
  onEscapeClick,
}: LightboxProps) {
  const lightboxRef = useRef(null);
  const barrierRef = useRef(null);

  const {
    copy: { closeButtonLabelText, next, previous },
  } = useConfig();

  const handleEscapeKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscapeClick();
      }
    },
    [onEscapeClick],
  );

  useEffect(() => {
    const lightbox = lightboxRef.current;
    if (!lightbox) return;

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

  if (!isLightboxVisible) return null;

  return (
    <div
      id={lightboxUid}
      role="dialog"
      aria-modal
      aria-labelledby={`${lightboxUid}-title`}
      className={styles.lightbox}
      onClick={onClick}
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
          <div className={styles.actionsWrapper}>
            <Button
              iconLeft={<IconAngleLeft />}
              onClick={onPreviousClick}
              theme="black"
              variant="secondary"
            >
              <span className={styles.screenReaderText}>{previous}</span>
            </Button>
            <Button
              iconLeft={<IconAngleRight />}
              onClick={onNextClick}
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
            onClick={onClick}
          >
            <span className={styles.screenReaderText}>
              {closeButtonLabelText}
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true" tabIndex={-1} />
          </button>
        </div>
      </div>
    </div>
  );
}
