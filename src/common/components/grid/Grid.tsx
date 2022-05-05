import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";

import styles from "./grid.module.scss";

export interface GridProps {
  children: React.ReactNode;
  colsCount?: number;
  className?: string;
}

export default function Grid({
  colsCount = 3,
  children,
  className,
}: GridProps) {
  return (
    <div
      className={classNames(styles.grid, styles[`cols${colsCount}`], className)}
    >
      {children}
    </div>
  );
}
