import React from 'react'

import useConfig from '../configProvider/useConfig'
import { MAIN_CONTENT_ID } from '../../common/constants'
import styles from './pageContentLayout.module.scss'
import Container from '../../common/components/container/Container'

type PageContentLayoutProps = {
  breadcrumbs?: React.ReactNode
  heroContainer?: JSX.Element
  content: React.ReactNode
  collections?: React.ReactNode
  sidebarContent: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function PageContentLayout({
  breadcrumbs,
  heroContainer,
  content,
  collections,
  sidebarContent,
  imageSrc,
  imageAlt,
}: PageContentLayoutProps) {
  const {
    components: { Img },
  } = useConfig()

  return (
    <div className={styles.contentLayout}>
      {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
      <main id={MAIN_CONTENT_ID} className={styles.mainLayout}>
        {imageSrc && (
          <div className={styles.hero}>
            <Container wrapper={heroContainer}>
              <div className={styles.heroInner}>
                <div>
                  <figure className={styles.imageContainer}>
                    <Img src={imageSrc} alt={imageAlt} />
                  </figure>
                </div>
              </div>
            </Container>
          </div>
        )}
        <div className={styles.content}>
          {content}
          <aside>{sidebarContent}</aside>
        </div>
      </main>
      {collections}
    </div>
  )
}
