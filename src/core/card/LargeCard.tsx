import { IconArrowRight } from 'hds-react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './largeCard.module.scss';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';
import { BackgroundImage } from '../image/BackgroundImage';

export type LargeCardProps = {
  /**
   * Card id.
   */
  id?: string;
  /**
   * Card container aria-label.
   */
  ariaLabel?: string;
  /**
   * Card image label.
   */
  imageLabel?: string;
  /**
   * Card image url.
   */
  imageUrl?: string | null;
  /**
   * Card image image position.
   */
  imagePosition?: 'image-right' | 'image-left';
  /**
   * Card subtitle.
   */
  subTitle?: string;
  /**
   * Card main text contents.
   */
  text?: string;
  /**
   * Card title.
   */
  title?: string;
  /**
   * Card link url.
   */
  url?: string;
  /**
   * Additional classname for the card.
   */
  className?: string;
  /**
   * Card custom content (component) below the main text.
   */
  customContent?: React.ReactNode;
  /**
   *  Boolean indicating whether the link arrow icon is shown.
   */
  hasLink?: boolean;
  /**
   *  Boolean indicating whether the text content is clamped in the Card.
   */
  clampText?: boolean;
  /**
   *  Boolean indicating whether the Card link opens in new tab.
   */
  openInNewTab?: boolean;
  /**
   *  Boolean indicating whether the border styles should be applied to the Card.
   */
  withBorder?: boolean;
  /**
   * Boolean indicating whether flex attribute should be added to the container of the link.
   */
  flex?: boolean;
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
  flex,
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
          flex={flex}
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
