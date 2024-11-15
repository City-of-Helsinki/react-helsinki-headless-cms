import { Breadcrumb as HdsBreadcrumb } from 'hds-react';
import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import { getBreadcrumbListItems } from './utils';
import styles from './pageContentBreadcrumb.module.scss';
import type { BreadcrumbUnionType } from './types';

export function PageContentBreadcrumb({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbUnionType;
}) {
  const {
    copy: { breadcrumbNavigationLabel },
  } = useConfig();
  const listItems = getBreadcrumbListItems(breadcrumbs);
  return (
    <div className={styles.container}>
      <HdsBreadcrumb ariaLabel={breadcrumbNavigationLabel} list={listItems} />
    </div>
  );
}
