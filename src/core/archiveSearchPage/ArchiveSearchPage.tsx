import React from 'react';

import BasicMeta from './ArchivePageMeta';
import styles from './archiveSearchPage.module.scss';

export type ArchiveSearchPageProps = {
  navigation: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  title?: string;
  description?: string;
};

export function ArchivePage({
  title,
  description,
  navigation,
  content,
  footer,
}: ArchiveSearchPageProps) {
  return (
    <>
      <BasicMeta title={title} description={description} />
      <div className={styles.pageLayout}>
        <div>{navigation}</div>
        {content}
        {footer}
      </div>
    </>
  );
}
