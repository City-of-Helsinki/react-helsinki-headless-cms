import React from 'react';

import styles from './pageContentLayout.module.scss';
import Hero from '../hero/Hero';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { PageSection } from '../pageSection/PageSection';

export type PageContentLayoutProps = {
  id: string;
  title?: string;
  breadcrumbs?: React.ReactNode;
  heroContainer?: JSX.Element;
  content: React.ReactNode;
  shareLinks?: React.ReactNode;
  collections?: React.ReactNode;
  sidebarContent: React.ReactNode;
  imageSrc?: string | null;
  imageAlt?: string;
  imageLabel?: string;
  backUrl?: string;
};

export function PageContentLayout({
  id,
  title,
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
  return (
    <div className={styles.contentLayout}>
      {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}

      <div className={styles.mainLayout}>
        <Hero
          id={id}
          container={heroContainer}
          imageAlt={imageAlt}
          imageUrl={imageSrc}
          imageLabel={imageLabel}
          backUrl={backUrl}
        />
        <PageSection className={styles.contentWrapper}>
          <ContentContainer>
            <div className={styles.content}>
              <div>
                {title}
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
      </div>
    </div>
  );
}
