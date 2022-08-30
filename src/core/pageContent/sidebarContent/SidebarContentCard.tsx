import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { IconArrowRight } from 'hds-react';

import { Link } from '../../link/Link';
import { useConfig } from '../../configProvider/useConfig';
import styles from './sidebarContentCard.module.scss';

type SidebarContentCardProps = {
  title: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
  publishingDate?: string;
};

export default function SidebarContentCard({
  title,
  url,
  imageUrl,
  imageAlt,
  description,
  publishingDate,
}: SidebarContentCardProps) {
  const {
    components: { Img },
    utils: { getIsHrefExternal },
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
      <p className={styles.description}>{description && description}</p>
      <Link
        className={styles.link}
        href={url}
        iconRight={
          !getIsHrefExternal(url) && <IconArrowRight aria-hidden="true" />
        }
      >
        {title}
      </Link>
      <p className={styles.publishingDate}>
        {' '}
        {publishingDate && publishingDate}
      </p>
    </div>
  );
}
