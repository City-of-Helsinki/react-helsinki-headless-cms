import React from 'react';

import styles from './archiveSearchPage.module.scss';

export type ArchiveSearchPageProps = {
  navigation: React.ReactNode;
  content: React.ReactNode;
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
