import React from "react";

import styles from "./helloWorld.module.scss";

export default function HelloWorld() {
  return (
    <main>
      <h1 className={styles.title}>Hello world!</h1>
    </main>
  );
}
