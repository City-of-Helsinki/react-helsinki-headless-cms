import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { useConfig } from '../../configProvider/useConfig';
import styles from './sidebarContentCard.module.scss';

type SidebarContentCardProps = {
  title: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function SidebarContentCard({
  title,
  url,
  imageUrl,
  imageAlt,
}: SidebarContentCardProps) {
  const {
    components: { A, Img },
  } = useConfig();

  return (
    <div
      className={classNames(styles.container, {
        [styles.withoutImage]: !imageUrl,
      })}
    >
      {imageUrl && (
        <div className={styles.image}>
          <Img src={imageUrl} alt={imageAlt ?? ''} />
        </div>
      )}
      <h2 className={styles.title}>
        <A href={url}>{title}</A>
      </h2>
    </div>
  );
}
