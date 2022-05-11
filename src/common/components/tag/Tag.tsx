import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";
import { Tag as HDSTag } from "hds-react";

import styles from "./tag.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  variant?: "default" | "card" | "search";
};

export default function Tag({
  className,
  variant = "default",
  children,
  featured,
}: Props) {
  return (
    <HDSTag
      className={classNames(
        styles.tag,
        styles[`variant-${variant}`],
        featured && styles.featured,
        className
      )}
    >
      {children}
    </HDSTag>
  );
}
