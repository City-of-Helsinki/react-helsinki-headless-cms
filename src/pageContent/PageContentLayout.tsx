import React from "react";

import styles from "./pageContentLayout.module.scss";

type Props = {
  breadcrumbs?: React.ReactNode;
  content: React.ReactNode;
  sidebarContent: React.ReactNode;
};

export default function PageContentLayout({
  breadcrumbs,
  content,
  sidebarContent,
}: Props) {
  return (
    <div className={styles.contentLayout}>
      {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
      <main className={styles.mainLayout}>
        {content}
        <aside>{sidebarContent}</aside>
      </main>
    </div>
  );
}
