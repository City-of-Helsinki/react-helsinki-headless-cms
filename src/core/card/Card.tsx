import { IconArrowRight } from "hds-react";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";

import styles from "./card.module.scss";

export type CardProps = {
  imageUrl?: string;
  subTitle?: string;
  text?: string;
  title?: string;
  url?: string;
  className?: string;
};

export default function Card({
  imageUrl,
  subTitle,
  text,
  title,
  url,
  className,
}: CardProps) {
  return (
    <div className={classNames(styles.cardWrapper, className)}>
      {imageUrl && (
        <div
          className={styles.imageWrapper}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}
      <div className={styles.textWrapper}>
        {title && <div className={styles.title}>{title}</div>}
        {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
        {text && <div className={styles.text}>{text}</div>}
        {url && (
          <div className={styles.buttonWrapper}>
            <a href={url}>
              <IconArrowRight aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
