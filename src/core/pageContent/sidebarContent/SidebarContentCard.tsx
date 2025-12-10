import React from 'react';

import { Link } from '../../link/Link';
import styles from './sidebarContentCard.module.scss';
import { Image } from '../../image/Image';
import { formatDateFromString } from '../../../common/utils/dates';

type SidebarContentCardProps = {
  id: string;
  title: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
  publishingDate?: string;
};

export default function SidebarContentCard({
  id,
  title,
  url,
  imageUrl,
  imageAlt,
  description,
  publishingDate,
}: SidebarContentCardProps) {
  return (
    <div className={styles.container}>
      <Image
        id={id}
        className={styles.image}
        src={imageUrl ?? ''}
        alt={imageAlt ?? ''}
      />
      <div className={styles.content}>
        {description && <p className={styles.description}>{description}</p>}
        <Link className={styles.link} href={url}>
          {title}
        </Link>
        {publishingDate && (
          <p className={styles.publishingDate}>
            {formatDateFromString(publishingDate)}
          </p>
        )}
      </div>
    </div>
  );
}
