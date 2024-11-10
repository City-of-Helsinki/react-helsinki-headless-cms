import React from 'react';

import styles from './archiveSearchPage.module.scss';

export type ArchiveSearchPageProps = {
  /**
   * Navigation component for the archive search page.
   */
  navigation: React.ReactNode;
  /**
   *Content component for the archive search page.
   */
  content: React.ReactNode;
  /**
   * Footer component for the archive search page.
   */
  footer: React.ReactNode;
};

export function ArchivePage({
  navigation,
  content,
  footer,
}: ArchiveSearchPageProps) {
  return (
    <div className={styles.pageLayout}>
      <div>{navigation}</div>
      {content}
      {footer}
    </div>
  );
}
