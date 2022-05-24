import React from "react";

import { MAIN_CONTENT_ID } from "../../common/constants";
import styles from "./pageContentLayout.module.scss";

type PageContentLayoutProps = {
  breadcrumbs?: React.ReactNode;
  content: React.ReactNode;
  collections?: React.ReactNode;
  sidebarContent: React.ReactNode;
};

export default function PageContentLayout({
  breadcrumbs,
  content,
  collections,
  sidebarContent,
}: PageContentLayoutProps) {
  return (
    <div className={styles.contentLayout}>
      {breadcrumbs && <div className={styles.breadcrumbs}>{breadcrumbs}</div>}
      <main id={MAIN_CONTENT_ID} className={styles.mainLayout}>
        {content}
        <aside>{sidebarContent}</aside>
      </main>
      {collections}
    </div>
  );
}
