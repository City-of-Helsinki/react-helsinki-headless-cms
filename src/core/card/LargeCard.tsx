import { IconArrowRight } from 'hds-react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './largeCard.module.scss';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';
import { BackgroundImage } from '../image/BackgroundImage';

export type LargeCardProps = {
  id?: string;
  ariaLabel?: string;
  imageLabel?: string;
  imageUrl?: string | null;
  imagePosition?: 'image-right' | 'image-left';
  subTitle?: string;
  text?: string;
  title?: string;
  url?: string;
  className?: string;
  customContent?: React.ReactNode;
  hasLink?: boolean;
  clampText?: boolean;
  openInNewTab?: boolean;
  withBorder?: boolean;
};

export function LargeCard({
  id,
  ariaLabel,
  className,
  imageUrl,
  imagePosition,
  imageLabel,
  title,
  subTitle,
  text,
  customContent,
  hasLink,
  url,
  clampText,
  openInNewTab,
  withBorder,
}: LargeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleToggleActive = () => setIsHovered((val) => !val);

  const content = (
    <div
      className={classNames(
        styles[`${imagePosition}`],
        styles.cardWrapper,
        withBorder && styles.withBorder,
        isHovered && styles.isHovered,
      )}
    >
      <BackgroundImage
        id={id}
        url={imageUrl}
        labelTag={imageLabel}
        className={styles.imageWrapper}
      />
      <div className={styles.textWrapper}>
        {title && <div className={styles.title}>{title}</div>}
        {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
        <div className={classNames(styles.text, clampText && styles.clamp)}>
          {text}
        </div>
        {customContent && (
          <div className={styles.customContent}>{customContent}</div>
        )}
        {url && hasLink && (
          <div className={styles.buttonWrapper}>
            <Link
              tabIndex={-1}
              href={url}
              openInNewTab={openInNewTab}
              iconLeft={<IconArrowRight aria-hidden="true" />}
              showExternalIcon={false}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {hasLink ? (
        <LinkBox
          id={id}
          href={url}
          className={classNames(styles.cardLink, className)}
          aria-label={ariaLabel || ''}
          openInNewTab={openInNewTab}
          onMouseEnter={handleToggleActive}
          onMouseLeave={handleToggleActive}
        >
          {content}
        </LinkBox>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{content}</>
      )}
    </>
  );
}
