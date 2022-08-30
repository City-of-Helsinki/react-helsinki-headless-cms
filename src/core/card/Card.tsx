import { IconArrowRight, Tag } from 'hds-react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './card.module.scss';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';

export type CardProps = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  imageUrl?: string;
  imageLabel?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  customContent?: React.ReactNode | string;
  hasLink?: boolean;
  url?: string;
  withBorder?: boolean;
  withShadow?: boolean;
  direction?: 'fixed-horisontal' | 'fixed-vertical' | 'responsive';
  clampText?: boolean;
  target?: '_blank' | '_self';
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
  url,
  withBorder,
  withShadow,
  direction = 'responsive',
  clampText,
  target,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleActive = () => setIsHovered((val) => !val);

  return (
    <LinkBox
      aria-hidden
      id={id}
      href={url}
      className={className}
      ariaLabel={ariaLabel || ''}
      target={target}
      onMouseEnter={handleToggleActive}
      onMouseLeave={handleToggleActive}
    >
      <div
        className={classNames(
          styles.cardWrapper,
          withBorder && styles.withBorder,
          withShadow && styles.withShadow,
          direction && styles[direction],
          isHovered && styles.isHovered,
        )}
      >
        {imageUrl && (
          <div
            className={classNames(
              styles.imageWrapper,
              direction && styles[direction],
            )}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            {imageLabel && (
              <div className={styles.imageLabel}>
                <Tag className={styles.tag}>{imageLabel}</Tag>
              </div>
            )}
          </div>
        )}
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
                href={url}
                target={target}
                iconLeft={<IconArrowRight aria-hidden="true" />}
                showExternalIcon={false}
              />
            </div>
          )}
        </div>
      </div>
    </LinkBox>
  );
}
