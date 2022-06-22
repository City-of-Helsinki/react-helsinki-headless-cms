import React from "react";

import { useConfig } from "../configProvider/useConfig";
import { Breadcrumb } from "./types";
import styles from "./pageContentBreadcrumbs.module.scss";

type PageContentBreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export default function PageContentBreadcrumbs({
  breadcrumbs,
}: PageContentBreadcrumbsProps) {
  const {
    copy: { breadcrumbNavigationLabel, breadcrumbListLabel },
    components: { A },
  } = useConfig();

  return (
    <nav aria-label={breadcrumbNavigationLabel} className={styles.navigation}>
      <ul aria-label={breadcrumbListLabel} className={styles.list}>
        {breadcrumbs.map(({ title, link }, i) => (
          <li key={title} className={styles.item}>
            {i === breadcrumbs.length - 1 ? (
              title
            ) : (
              <A href={link} className={styles.link}>
                <span className={styles.linkLabel}>{title}</span>
              </A>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
