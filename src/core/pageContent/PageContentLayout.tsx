import React from 'react';
import { Koros } from 'hds-react';

import { MAIN_CONTENT_ID } from '../../common/constants';
import styles from './pageContentLayout.module.scss';
import Hero from '../hero/Hero';

export type PageContentLayoutProps = {
  breadcrumbs?: React.ReactNode;
  heroContainer?: JSX.Element;
  content: React.ReactNode;
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
        <div className={styles.content}>
          {content}
          <aside>{sidebarContent}</aside>
        </div>
      </main>
      {collections && (
        <div className={styles.collectionsContainer}>
          <Koros className={styles.koros} />
          <div className={styles.innerCollectionsContainer}>{collections}</div>
        </div>
      )}
    </div>
  );
}
