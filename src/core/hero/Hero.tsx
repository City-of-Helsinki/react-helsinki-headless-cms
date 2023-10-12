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
import { HeroProps } from '../pageContent/types';
import { getColor, isWhiteText } from '../utils/string';
import { useConfig } from '../configProvider/useConfig';

export type HeroComponentProps = {
  id: string;
  className?: string;
  backUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLabel?: string;
  container?: JSX.Element;
} & HeroProps;

export default function Hero({
  id,
  title,
  description,
  backgroundColor,
  korosType,
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

  const textContents = title ? (
    <div
      className={classNames(
        styles.textContents,
        backgroundColor &&
          isWhiteText(backgroundColor) &&
          colorStyles.whiteText,
        korosType && styles.withKoros,
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
            styles.button,
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
  ) : null;

  return (
    <div
      className={classNames(
        styles.hero,
        className,
        backgroundColor &&
          colorStyles[`background${getColor(backgroundColor)}`],
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
                {imageLabel && <div className={styles.label}>{imageLabel}</div>}
                {textContents}
              </div>
            )}

            {backUrl && (
              <div className={styles.link}>
                <Link
                  href={backUrl}
                  openInNewTab={false}
                  iconLeft={<IconArrowLeft aria-hidden="true" />}
                />
              </div>
            )}
          </div>
          {!imageUrl && textContents}
        </ContentContainer>
      </Container>
      {korosType && (
        <Koros
          className={styles.heroKoros}
          type={korosType}
          style={{ fill: 'white' }}
        />
      )}
    </div>
  );
}
