import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconArrowLeft } from 'hds-react';

import { useConfig } from '../configProvider/useConfig';
import Container from '../../common/components/container/Container';
import styles from './hero.module.scss';
import { Link } from '../link/Link';
import { ContentContainer } from '../contentContainer/ContentContainer';

export type HeroProps = {
  className?: string;
  backUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLabel?: string;
  container?: JSX.Element;
};

export default function Hero({
  className,
  backUrl,
  imageUrl,
  imageAlt,
  container,
  imageLabel,
}: HeroProps) {
  const {
    components: { Img },
  } = useConfig();

  return (
    <div className={classNames(styles.hero, className)}>
      <Container wrapper={container}>
        <ContentContainer>
          <div className={styles.heroInner}>
            <div>
              <figure className={styles.imageContainer}>
                <Img src={imageUrl} alt={imageAlt} />
              </figure>
              {imageLabel && <div className={styles.label}>{imageLabel}</div>}
            </div>
            {backUrl && (
              <div className={styles.link}>
                <Link
                  href={backUrl}
                  target="_self"
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
