import React from 'react';

import { MAIN_CONTENT_ID } from '../../common/constants';
import styles from './pageContentLayout.module.scss';
import Hero from '../hero/Hero';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { PageSection } from '../pageSection/PageSection';

export type PageContentLayoutProps = {
  breadcrumbs?: React.ReactNode;
  heroContainer?: JSX.Element;
  content: React.ReactNode;
  shareLinks?: React.ReactNode;
  collections?: React.ReactNode;
  sidebarContent: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  backUrl?: string;
};

export function PageContentLayout({
  breadcrumbs,
  heroContainer,
  content,
  shareLinks,
  collections,
  sidebarContent,
  imageSrc,
  imageAlt,
  imageLabel,
  backUrl,
}: PageContentLayoutProps) {
  // todo: temporary disabled
  const hasBreadCrumbs = false;
  return (
    <div className={styles.contentLayout}>
      {hasBreadCrumbs && breadcrumbs && (
        <div className={styles.breadcrumbs}>{breadcrumbs}</div>
      )}

      <main id={MAIN_CONTENT_ID} className={styles.mainLayout}>
        {imageSrc && (
          <Hero
            container={heroContainer}
            imageAlt={imageAlt}
            imageUrl={imageSrc}
            imageLabel={imageLabel}
            backUrl={backUrl}
          />
        )}
        <PageSection>
          <ContentContainer>
            <div className={styles.content}>
              <div>
                {content}
                {shareLinks && shareLinks}
              </div>
              <aside>{sidebarContent}</aside>
            </div>
          </ContentContainer>
        </PageSection>
        {collections && (
          <PageSection
            className={styles.collectionsWrapper}
            korosTop
            korosTopClassName={styles.collectionKorosTop}
          >
            <ContentContainer>{collections}</ContentContainer>
          </PageSection>
        )}
      </main>
    </div>
  );
}
