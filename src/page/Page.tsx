import React from "react";

import styles from "./page.module.scss";

export type PageProps = {
  navigation: React.ReactNode;
  notification?: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export default function Page({
  navigation,
  notification,
  content,
  footer,
}: PageProps) {
  return (
    <div className={styles.pageLayout}>
      <div>
        {navigation}
        {notification}
      </div>
      {content}
      {footer}
    </div>
  );
}
