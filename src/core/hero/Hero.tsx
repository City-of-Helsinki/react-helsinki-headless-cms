import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconArrowLeft, Koros, KorosType } from 'hds-react';

import Container from '../../common/components/container/Container';
import styles from './hero.module.scss';
import { Link } from '../link/Link';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { Image } from '../image/Image';
import Text from '../../common/components/text/Text';

export type HeroProps = {
  id: string;
  title?: string;
  description?: string;
  backgroundClassName?: string;
  korosType?: KorosType;
  actionUrl?: string;
  actionText?: string;
  className?: string;
  backUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLabel?: string;
  container?: JSX.Element;
};

export default function Hero({
  id,
  title,
  description,
  backgroundClassName,
  korosType,
  actionText,
  actionUrl,
  className,
  backUrl,
  imageUrl,
  imageAlt,
  container,
  imageLabel,
}: HeroProps) {
  const textContents = title ? (
    <>
      <header>
        <Text as="h1" variant="h1">
          {title}
        </Text>
      </header>
      {backgroundClassName && <div>{backgroundClassName}</div>}
      {description && <div>{description}</div>}
      {actionText && actionUrl && <div>action button</div>}
      {korosType && <Koros type={korosType} />}
    </>
  ) : null;

  return (
    <div className={classNames(styles.hero, className, backgroundClassName)}>
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
    </div>
  );
}
