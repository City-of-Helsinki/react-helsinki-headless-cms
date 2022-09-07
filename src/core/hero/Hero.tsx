import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconArrowLeft } from 'hds-react';

import Container from '../../common/components/container/Container';
import styles from './hero.module.scss';
import { Link } from '../link/Link';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { Image } from '../image/Image';

export type HeroProps = {
  id: string;
  className?: string;
  backUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLabel?: string;
  container?: JSX.Element;
};

export default function Hero({
  id,
  className,
  backUrl,
  imageUrl,
  imageAlt,
  container,
  imageLabel,
}: HeroProps) {
  return (
    <div className={classNames(styles.hero, className)}>
      <Container wrapper={container}>
        <ContentContainer>
          <div className={styles.heroInner}>
            <div>
              <Image
                id={id}
                className={styles.imageContainer}
                src={imageUrl}
                alt={imageAlt}
              />
              {imageLabel && <div className={styles.label}>{imageLabel}</div>}
            </div>
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
        </ContentContainer>
      </Container>
    </div>
  );
}
