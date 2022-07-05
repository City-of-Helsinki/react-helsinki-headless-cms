// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import React from 'react';

import styles from './page.module.scss';

export type PageProps = {
  navigation: React.ReactNode;
  notification?: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
};

export function Page({
  navigation,
  notification,
  content,
  footer,
  className,
}: PageProps) {
  return (
    <div className={classNames(styles.pageLayout, className)}>
      <div>
        {navigation}
        {notification}
      </div>
      {content}
      {footer}
    </div>
  );
}
