import React from "react";

import styles from "./articlesSearchPage.module.scss";

export type ArticleSearchPageProps = {
  navigation: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export default function Page({
  navigation,
  content,
  footer,
}: ArticleSearchPageProps) {
  return (
    <div className={styles.pageLayout}>
      <div>{navigation}</div>
      {content}
      {footer}
    </div>
  );
}
