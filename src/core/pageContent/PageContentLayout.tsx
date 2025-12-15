import React from 'react';
import classNames from 'classnames';

import styles from './pageContentLayout.module.scss';
import Hero from '../hero/Hero';
import { ContentContainer } from '../contentContainer/ContentContainer';
import { PageSection } from '../pageSection/PageSection';
import type { HeroProps } from './types';

export type PageContentLayoutProps = {
  id: string;
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
} & HeroProps;

export function PageContentLayout({
  id,
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
  ...heroProps
}: PageContentLayoutProps) {
  return (
    <div className={styles.contentLayout}>
      {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
      <div className={styles.mainLayout}>
        <Hero
          id={id}
          container={heroContainer}
          imageAlt={imageAlt}
          imageUrl={imageSrc ?? undefined}
          imageLabel={imageLabel}
          backUrl={backUrl}
          {...heroProps}
        />
        <PageSection
          className={classNames(
            styles.contentWrapper,
            !heroProps.title && !imageSrc ? styles.withBorder : '',
          )}
        >
          <ContentContainer>
            <div className={styles.content}>
              <div className={styles.mainContent}>{content}</div>
              <aside>{sidebarContent}</aside>
              <div className={styles.shareLinks}>{shareLinks}</div>
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
