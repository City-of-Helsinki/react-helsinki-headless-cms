import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames'
import { IconArrowLeft } from 'hds-react'

import useConfig from '../configProvider/useConfig'
import Container from '../../common/components/container/Container'
import styles from './hero.module.scss'
import LinkWrapper from '../../common/components/linkWrapper/LinkWrapper'

export type HeroProps = {
  className?: string
  backUrl?: string
  imageUrl?: string
  imageAlt?: string
  imageLabel?: string
  container?: JSX.Element
}

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
  } = useConfig()

  return (
    <div className={classNames(styles.hero, className)}>
      <Container wrapper={container}>
        <div className={styles.heroInner}>
          <div>
            <figure className={styles.imageContainer}>
              <Img src={imageUrl} alt={imageAlt} />
            </figure>
            {imageLabel && <div className={styles.label}>{imageLabel}</div>}
          </div>
          {backUrl && (
            <div className={styles.link}>
              <LinkWrapper
                href={backUrl}
                target="_self"
                iconLeft={<IconArrowLeft aria-hidden="true" />}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
