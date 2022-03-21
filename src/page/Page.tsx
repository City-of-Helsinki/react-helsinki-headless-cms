import React from "react";

import styles from "./page.module.scss";

type Props = {
  navigation: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export default function Page({ navigation, content, footer }: Props) {
  return (
    <div className={styles.pageLayout}>
      {navigation}
      {content}
      {footer}
    </div>
  );
}
