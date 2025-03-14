import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, IconAngleRight, IconArrowLeft, Koros } from 'hds-react';

import Container from '../../common/components/container/Container';
import styles from './hero.module.scss';
import colorStyles from '../styles/background.module.scss';
import { Link } from '../link/Link';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { Image } from '../image/Image';
import Text from '../../common/components/text/Text';
import type { HeroProps } from '../pageContent/types';
import { getColor, isWhiteText } from '../utils/string';
import { useConfig } from '../configProvider/useConfig';

export type HeroComponentProps = {
  /**
   * Hero container id.
   */
  id: string;
  /**
   * Additinal classname applied to the Content container.
   */
  className?: string;
  /**
   * Hero back button url.
   */
  backUrl?: string;
  /**
   * Hero iamge url.
   */
  imageUrl?: string;
  /**
   * Hero alt image text.
   */
  imageAlt?: string;
  /**
   * Hero iamge label.
   */
  imageLabel?: string;
  /**
   * Hero container wrapper component.
   */
  container?: JSX.Element;
} & HeroProps;

export default function Hero({
  id,
  title,
  description,
  backgroundColor,
  korosType = 'basic',
  actionText,
  actionUrl,
  actionUrlTarget,
  className,
  backUrl,
  imageUrl,
  imageAlt,
  container,
  imageLabel,
}: HeroComponentProps) {
  const {
    utils: { redirectToUrl },
  } = useConfig();

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = () => {
    if (actionUrl) {
      if (actionUrlTarget === '_blank') {
        openInNewTab(actionUrl);
      } else {
        redirectToUrl(actionUrl);
      }
    }
  };

  const textContents = (
    <div
      className={classNames(
        styles.textContents,
        backgroundColor &&
          !imageUrl &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
        title && backgroundColor && korosType && styles.withKoros,
      )}
    >
      <header>
        <Text as="h1" variant="h1">
          {title}
        </Text>
      </header>
      {description && <p>{description}</p>}
      {actionText && actionUrl && (
        <div
          className={classNames(
            !imageUrl && styles.button,
            backgroundColor &&
              !imageUrl &&
              isWhiteText(backgroundColor) &&
              colorStyles.whiteButton,
          )}
        >
          <Button
            variant="secondary"
            theme="black"
            onClick={handleClick}
            iconRight={<IconAngleRight />}
          >
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        className={classNames(
          styles.hero,
          className,
          backgroundColor &&
            colorStyles[`background${getColor(backgroundColor)}`],
          title &&
            backgroundColor &&
            korosType &&
            !imageUrl &&
            styles.withKoros,
          korosType && styles[korosType],
        )}
      >
        <Container wrapper={container}>
          <ContentContainer>
            <div className={styles.heroInner}>
              {imageUrl && (
                <div>
                  <Image
                    id={id}
                    className={styles.imageContainer}
                    src={imageUrl}
                    alt={imageAlt}
                  />
                  {imageLabel && (
                    <div className={styles.label}>{imageLabel}</div>
                  )}
                </div>
              )}

              {backUrl && (
                <div className={styles.link}>
                  <Link
                    href={backUrl}
                    openInNewTab={false}
                    aria-label="Back"
                    iconLeft={<IconArrowLeft aria-hidden="true" />}
                  />
                </div>
              )}
              {!imageUrl && title && textContents}
            </div>
          </ContentContainer>
        </Container>
        {(title || backgroundColor || imageUrl) && korosType && (
          <Koros
            className={classNames(
              styles.heroKoros,
              imageUrl && styles.withMargin,
              korosType && styles[korosType],
            )}
            type={korosType}
            flipVertical={!imageUrl}
            style={{
              fill: `var(--${
                // eslint-disable-next-line no-nested-ternary
                imageUrl
                  ? 'color-white'
                  : backgroundColor
                    ? `color-${backgroundColor}`
                    : 'hcrc-color-hero-bg, --color-fog-light'
              })`,
            }}
          />
        )}
      </div>
      {imageUrl && title && (
        <Container>
          <ContentContainer>{textContents}</ContentContainer>
        </Container>
      )}
    </>
  );
}
