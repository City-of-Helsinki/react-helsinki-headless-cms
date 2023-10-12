import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconArrowLeft, Koros } from 'hds-react';

import Container from '../../common/components/container/Container';
import styles from './hero.module.scss';
import { Link } from '../link/Link';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { Image } from '../image/Image';
import Text from '../../common/components/text/Text';
import { HeroProps } from '../pageContent/types';

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
}: HeroComponentProps) {
  const textContents = title ? (
    <div className={styles.textContents}>
      <header>
        <Text as="h1" variant="h1">
          {title}
        </Text>
      </header>
      {backgroundClassName && <div>{backgroundClassName}</div>}
      {description && <p>{description}</p>}
      {actionText && actionUrl && <div>action button</div>}
      {korosType && <Koros type={korosType} />}
    </div>
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
