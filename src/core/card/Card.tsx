/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { IconArrowRight } from 'hds-react';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './card.module.scss';
import colorStyles from '../styles/background.module.scss';
import { LinkBox } from '../linkBox/LinkBox';
import { Link } from '../link/Link';
import { BackgroundImage } from '../image/BackgroundImage';
import { getColor, getTextFromHtml, isWhiteText } from '../utils/string';
import { useConfig } from '../configProvider/useConfig';

export type CardDirection =
  | 'fixed-horisontal'
  | 'fixed-vertical'
  | 'responsive'
  | 'responsive-reverse';

export type CardAlignment =
  | 'left'
  | 'right'
  | 'center-left'
  | 'center-right'
  | 'delimited-left'
  | 'delimited-right';

export type CardProps = {
  /**
   * Card id.
   */
  id?: string;
  /**
   * Card container aria-label.
   */
  ariaLabel?: string;
  /**
   * Additional classname for the card.
   */
  className?: string;
  /**
   * Card image url.
   */
  imageUrl?: string | null;
  /**
   * Card image label.
   */
  imageLabel?: string;
  /**
   * Card title.
   */
  title?: string;
  /**
   *  Boolean indicating whether the styling applied for the title with icon layout.
   */
  withTitleIcon?: boolean;
  /**
   * Card title icon.
   */
  titleIcon?: React.ReactNode | string;
  /**
   * Card subtitle.
   */
  subTitle?: string;
  /**
   * Card main text contents.
   */
  text?: string;
  /**
   * Card custom content (component) below the main text.
   */
  customContent?: React.ReactNode | string;
  /**
   *  Boolean indicating whether the link arrow icon is shown.
   */
  hasLink?: boolean;
  /**
   * If true, show link arrow icon label.
   */
  linkArrowLabel?: string;
  /**
   * Card link url.
   */
  url?: string;
  /**
   *  Boolean indicating whether the border styles should be applied to the Card.
   */
  withBorder?: boolean;
  /**
   *   Boolean indicating whether the shadow styles should be applied to the Card.
   */
  withShadow?: boolean;
  /**
   *  Boolean which defines the Card content direction.
   */
  direction?: CardDirection;
  /**
   *  Defines the Card text and custon content alignement inside the Card.
   */
  alignment?: CardAlignment;
  /**
   *  Boolean indicating whether the text content is clamped in the Card.
   */
  clampText?: boolean;
  /**
   *  Boolean indicating whether the Card link opens in new tab.
   */
  openLinkInNewTab?: boolean;
  /**
   * Custom css properties for the Card container
   */
  style?: React.CSSProperties;
  /**
   * Backgroud color of the Card
   */
  backgroundColor?: string;
  /**
   * Defines the width ratio for the text and image element in the card. Primary is wider.
   */
  primaryContent?: 'image' | 'text';
  /**
   * Boolean indicating whether flex attribute should be added to the container of the link.
   */
  flex?: boolean;
};

export function Card({
  id,
  alignment,
  ariaLabel,
  className,
  imageUrl,
  imageLabel,
  title,
  withTitleIcon,
  titleIcon,
  subTitle,
  text,
  customContent,
  hasLink,
  linkArrowLabel,
  url,
  withBorder,
  withShadow,
  direction = 'responsive',
  clampText,
  openLinkInNewTab,
  style,
  backgroundColor,
  primaryContent = 'text',
  flex,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleToggleActive = () => setIsHovered((val) => !val);
  const isDelimited = alignment?.startsWith('delimited');
  const isCentered = alignment?.startsWith('center');

  const getImagePosition = () => {
    if (alignment === undefined) {
      return 'image-left';
    }
    return alignment.indexOf('left') === -1 ? 'image-right' : 'image-left';
  };

  const imagePosition = getImagePosition();

  const {
    utils: { redirectToUrl, getIsHrefExternal },
  } = useConfig();

  const openInNewTab = (): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = () => {
    if (url) {
      if (getIsHrefExternal(url)) {
        openInNewTab();
      } else {
        redirectToUrl(url);
      }
    }
  };

  const content = (
    <div
      className={classNames(
        styles.cardWrapper,
        withBorder && styles.withBorder,
        withShadow && styles.withShadow,
        direction && styles[direction],
        primaryContent === 'image' && styles['primary-image'],
        imagePosition && styles[imagePosition],
        isHovered && styles.isHovered,

        backgroundColor && styles.horizontalBorder,
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
        isDelimited && styles.isDelimited,
        isCentered && styles.isCentered,
      )}
      style={style}
      onMouseEnter={url && handleToggleActive}
      onMouseLeave={url && handleToggleActive}
    >
      <BackgroundImage
        id={id}
        url={imageUrl}
        labelTag={imageLabel}
        className={classNames(
          styles.imageWrapper,
          direction && styles[direction],
          isDelimited && styles.isDelimited,
          isCentered && styles.isCentered,
          imagePosition.includes('left') ? styles.left : styles.right,
        )}
      />

      <div
        className={classNames(
          styles.contentWrapper,
          isDelimited && styles.isDelimited,
          isCentered && styles.isCentered,
        )}
        onClick={handleClick}
      >
        <div
          className={classNames(
            styles.content,
            backgroundColor
              ? colorStyles[`background${getColor(backgroundColor)}`]
              : colorStyles.backgroundDefault,
            backgroundColor &&
              isWhiteText(backgroundColor) &&
              colorStyles.whiteText,
            isDelimited && styles.isDelimited,
            isCentered && styles.isCentered,
          )}
        >
          <div className={styles.textWrapper}>
            {title && (
              <div
                className={classNames(
                  styles.title,
                  direction && styles[direction],
                )}
              >
                {title}
                {withTitleIcon && titleIcon}
              </div>
            )}
            {subTitle && (
              <div
                className={classNames(
                  styles.subTitle,
                  backgroundColor &&
                    isWhiteText(backgroundColor) &&
                    colorStyles.whiteText,
                )}
              >
                {subTitle}
              </div>
            )}
            {text && (
              <div
                className={classNames(
                  styles.text,
                  clampText && styles.clamp,
                  direction && styles[direction],
                )}
              >
                {getTextFromHtml(text)}
              </div>
            )}
            {customContent && (
              <div className={styles.customContent}>{customContent}</div>
            )}
          </div>
        </div>
        {url && hasLink && (
          <div
            className={classNames(
              styles.buttonWrapper,
              backgroundColor
                ? colorStyles[`background${getColor(backgroundColor)}`]
                : colorStyles.backgroundDefault,
              backgroundColor &&
                isWhiteText(backgroundColor) &&
                colorStyles.whiteLink,
            )}
          >
            <Link
              tabIndex={-1}
              href={url}
              openInNewTab={openLinkInNewTab}
              iconLeft={<IconArrowRight aria-hidden="true" />}
              showExternalIcon={false}
              aria-label={ariaLabel}
            >
              {linkArrowLabel && (
                <span className={styles.linkArrowLabel}>{linkArrowLabel}</span>
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <LinkBox
        id={id}
        href={url}
        className={className}
        aria-label={ariaLabel || ''}
        openInNewTab={openLinkInNewTab}
        onMouseEnter={handleToggleActive}
        onMouseLeave={handleToggleActive}
        flex={flex}
      >
        {content}
      </LinkBox>
    );
  }

  return content;
}
