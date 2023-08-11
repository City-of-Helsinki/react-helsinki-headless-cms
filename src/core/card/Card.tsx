import { IconArrowRight } from 'hds-react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './card.module.scss';
import colorStyles from '../styles/background.module.scss';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';
import { BackgroundImage } from '../image/BackgroundImage';
import { getColor } from '../utils/string';

export type CardProps = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  imageUrl?: string | null;
  imageLabel?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  customContent?: React.ReactNode | string;
  hasLink?: boolean;
  linkArrowLabel?: string;
  url?: string;
  withBorder?: boolean;
  withShadow?: boolean;
  direction?:
    | 'fixed-horisontal'
    | 'fixed-vertical'
    | 'responsive'
    | 'responsive-reverse';
  imagePosition?: 'image-left' | 'image-right';
  isDelimited?: boolean;
  clampText?: boolean;
  openLinkInNewTab?: boolean;
  style?: React.CSSProperties;
  backgroundColor?: string;
  primaryContent?: 'image' | 'text';
};

export function Card({
  id,
  ariaLabel,
  className,
  imageUrl,
  imageLabel,
  title,
  subTitle,
  text,
  customContent,
  hasLink,
  linkArrowLabel,
  url,
  withBorder,
  withShadow,
  direction = 'responsive',
  imagePosition = 'image-left',
  isDelimited = false,
  clampText,
  openLinkInNewTab,
  style,
  backgroundColor,
  primaryContent = 'text',
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleToggleActive = () => setIsHovered((val) => !val);

  return (
    <LinkBox
      id={id}
      href={url}
      className={className}
      aria-label={ariaLabel || ''}
      openInNewTab={openLinkInNewTab}
      onMouseEnter={handleToggleActive}
      onMouseLeave={handleToggleActive}
    >
      <div
        className={classNames(
          styles.cardWrapper,
          withBorder && styles.withBorder,
          withShadow && styles.withShadow,
          direction && styles[direction],
          primaryContent === 'image' && styles['primary-image'],
          imagePosition && styles[imagePosition],
          isHovered && styles.isHovered,
          isDelimited && styles.isDelimited,
          backgroundColor &&
            colorStyles[`background${getColor(backgroundColor)}`],
        )}
        style={style}
      >
        <BackgroundImage
          id={id}
          url={imageUrl}
          labelTag={imageLabel}
          className={classNames(
            styles.imageWrapper,
            direction && styles[direction],
          )}
        />
        <div className={styles.contentWrapper}>
          <div>
            <div className={styles.textWrapper}>
              {title && <div className={styles.title}>{title}</div>}
              {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
              {text && (
                <div
                  className={classNames(styles.text, clampText && styles.clamp)}
                >
                  {text}
                </div>
              )}
              {customContent && (
                <div className={styles.customContent}>{customContent}</div>
              )}
            </div>
          </div>
          {url && hasLink && (
            <div className={styles.buttonWrapper}>
              <Link
                tabIndex={-1}
                href={url}
                openInNewTab={openLinkInNewTab}
                iconLeft={<IconArrowRight aria-hidden="true" />}
                showExternalIcon={false}
              >
                {linkArrowLabel && (
                  <span className={styles.linkArrowLabel}>
                    {linkArrowLabel}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </LinkBox>
  );
}
