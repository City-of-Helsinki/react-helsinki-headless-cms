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

export type CardProps = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  imageUrl?: string | null;
  imageLabel?: string;
  title?: string;
  withTitleIcon?: boolean;
  titleIcon?: React.ReactNode | string;
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
        backgroundColor
          ? colorStyles[`background${getColor(backgroundColor)}`]
          : isDelimited && colorStyles.backgroundFog,
        backgroundColor && styles.horizontalBorder,
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
        isDelimited && styles.isDelimited,
      )}
      style={style}
      onMouseEnter={handleToggleActive}
      onMouseLeave={handleToggleActive}
    >
      <BackgroundImage
        id={id}
        url={imageUrl}
        labelTag={imageLabel}
        className={classNames(
          styles.imageWrapper,
          direction && styles[direction],
          isDelimited && styles.isDelimited,
        )}
      />

      <div
        className={classNames(
          styles.contentWrapper,
          isDelimited && styles.isDelimited,
        )}
        onClick={handleClick}
      >
        <div
          className={classNames(
            styles.content,
            backgroundColor
              ? colorStyles[`background${getColor(backgroundColor)}`]
              : isDelimited && colorStyles.backgroundFog,
            backgroundColor &&
              isWhiteText(backgroundColor) &&
              colorStyles.whiteText,
            isDelimited && styles.isDelimited,
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
                {withTitleIcon && titleIcon && titleIcon}
              </div>
            )}
            {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
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
                : isDelimited && colorStyles.backgroundFog,
              backgroundColor &&
                isWhiteText(backgroundColor) &&
                colorStyles.whiteText,
            )}
          >
            <Link
              tabIndex={-1}
              href={url}
              openInNewTab={openLinkInNewTab}
              iconLeft={<IconArrowRight aria-hidden="true" />}
              showExternalIcon={false}
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
      >
        {content}
      </LinkBox>
    );
  }

  return content;
}
