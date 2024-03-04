import { BreadcrumbProps, Breadcrumb as HdsBreadcrumb } from 'hds-react';
import React from 'react';

import { useConfig } from '../configProvider/useConfig';
import { getBreadcrumbListItems } from './utils';
import type { Breadcrumb as CmsBreadcrumbs } from '../../common/headlessService/__generated__';
import styles from './pageContentBreadcrumb.module.scss';

export function PageContentBreadcrumb({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbProps | CmsBreadcrumbs[];
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
