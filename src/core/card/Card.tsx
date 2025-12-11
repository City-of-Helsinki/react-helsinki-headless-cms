/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { IconArrowRight } from 'hds-react';
import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';
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

const warnOnSSR = () => {
  // eslint-disable-next-line no-console
  console.warn('Attempted to navigate in a non-browser environment.');
};

function CardTitle({
  children,
  direction,
  withTitleIcon,
  titleIcon,
}: {
  readonly children: React.ReactNode;
  readonly direction?: CardProps['direction'];
  readonly withTitleIcon: CardProps['withTitleIcon'];
  readonly titleIcon: CardProps['titleIcon'];
}) {
  if (!children) {
    return null;
  }

  return (
    <div className={classNames(styles.title, direction && styles[direction])}>
      {children}
      {withTitleIcon && titleIcon}
    </div>
  );
}

function CardSubTitle({
  children,
  backgroundColor,
}: {
  readonly children: React.ReactNode;
  readonly backgroundColor?: CardProps['backgroundColor'];
}): React.ReactElement | null {
  if (!children) {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.subTitle,
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
      )}
    >
      {children}
    </div>
  );
}

function CardText({
  children,
  clampText,
  direction,
}: Pick<CardProps, 'clampText' | 'direction'> & {
  children: React.ReactNode;
}): React.ReactElement | null {
  if (!children) {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.text,
        clampText && styles.clamp,
        direction && styles[direction],
      )}
    >
      {children}
    </div>
  );
}

function CardLink({
  url,
  backgroundColor,
  openLinkInNewTab,
  ariaLabel,
  linkArrowLabel,
}: Pick<
  CardProps,
  | 'url'
  | 'backgroundColor'
  | 'openLinkInNewTab'
  | 'ariaLabel'
  | 'linkArrowLabel'
>) {
  if (!url) {
    return null;
  }

  return (
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
  );
}

const getImagePosition = (alignment: CardProps['alignment']) => {
  if (alignment === undefined) {
    return 'image-left';
  }
  return alignment.indexOf('left') === -1 ? 'image-right' : 'image-left';
};

function CardInnerContent({
  id,
  ariaLabel,
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
  isHovered,
  handleToggleActive,
  isDelimited,
  isCentered,
  imagePosition,
  handleClick,
}: Omit<CardProps, 'className' | 'flex'> & {
  isHovered: boolean;
  handleToggleActive: MouseEventHandler;
  isDelimited: boolean;
  isCentered: boolean;
  imagePosition: 'image-left' | 'image-right';
  handleClick: () => void;
}) {
  const dynamicBackgroundClass = backgroundColor
    ? colorStyles[`background${getColor(backgroundColor)}`]
    : colorStyles.backgroundDefault;

  return (
    <div
      className={classNames(styles.cardWrapper, {
        // Layout/Directional classes
        [styles[direction]]: direction,
        [styles['primary-image']]: primaryContent === 'image',
        [styles[imagePosition]]: imagePosition,
        [styles.isDelimited]: isDelimited,
        [styles.isCentered]: isCentered,
        // Style/State classes
        [styles.withBorder]: withBorder,
        [styles.withShadow]: withShadow,
        [styles.isHovered]: isHovered,
        // Color-related classes
        [styles.horizontalBorder]: backgroundColor,
        [colorStyles.whiteText]:
          backgroundColor && isWhiteText(backgroundColor),
      })}
      style={style}
      onMouseEnter={url ? handleToggleActive : undefined}
      onMouseLeave={url ? handleToggleActive : undefined}
    >
      <BackgroundImage
        id={`${id}-image`}
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
          className={classNames(styles.content, dynamicBackgroundClass, {
            // Conditional classes using the object format
            [colorStyles.whiteText]:
              backgroundColor && isWhiteText(backgroundColor),
            [styles.isDelimited]: isDelimited,
            [styles.isCentered]: isCentered,
          })}
        >
          <div className={styles.textWrapper}>
            {title && (
              <CardTitle
                direction={direction}
                withTitleIcon={withTitleIcon}
                titleIcon={titleIcon}
              >
                {title}
              </CardTitle>
            )}
            <CardSubTitle backgroundColor={backgroundColor}>
              {subTitle}
            </CardSubTitle>
            {text && (
              <CardText clampText={clampText} direction={direction}>
                {getTextFromHtml(text)}
              </CardText>
            )}
            {customContent && (
              <div className={styles.customContent}>{customContent}</div>
            )}
          </div>
        </div>
        {hasLink && (
          <CardLink
            url={url}
            backgroundColor={backgroundColor}
            openLinkInNewTab={openLinkInNewTab}
            ariaLabel={ariaLabel}
            linkArrowLabel={linkArrowLabel}
          />
        )}
      </div>
    </div>
  );
}

export function Card(props: CardProps) {
  const { id, ariaLabel, className, url, openLinkInNewTab, flex, alignment } =
    props;
  const [isHovered, setIsHovered] = useState(false);
  const handleToggleActive: MouseEventHandler | undefined = () =>
    setIsHovered((val) => !val);

  const isDelimited = alignment?.startsWith('delimited') ?? false;
  const isCentered = alignment?.startsWith('center') ?? false;
  const imagePosition = getImagePosition(alignment);

  const {
    utils: { redirectToUrl, getIsHrefExternal },
  } = useConfig();

  const handleClick = () => {
    if (!url) return;

    // Ensure we are in a client-side (browser) environment
    if (typeof window === 'undefined') {
      warnOnSSR();
      return;
    }

    // Determine if we should open a new tab: either it's explicitly set, or it's an external URL.
    const shouldOpenNewTab = openLinkInNewTab || getIsHrefExternal(url);

    if (shouldOpenNewTab) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    } else {
      redirectToUrl(url);
    }
  };

  const content = (
    <CardInnerContent
      {...props}
      isHovered={isHovered}
      handleToggleActive={handleToggleActive}
      isDelimited={isDelimited}
      isCentered={isCentered}
      imagePosition={imagePosition}
      handleClick={handleClick}
    />
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
