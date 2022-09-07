import React from 'react';

import styles from './BackgroundImage.module.scss';
import { Tag } from '../../common/components/tag/Tag';
import { useResolveImageUrl } from '../hooks/useResolveImageUrl';

export type BackgroundImageProps = {
  id: string;
  url: string;
  customFallbackUrl?: string;
  labelTag?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function BackgroundImage({
  id,
  url,
  customFallbackUrl,
  labelTag,
  children,
  ...divProps
}: BackgroundImageProps) {
  const resolvedUrl = useResolveImageUrl({ id, url, customFallbackUrl });

  return (
    <div
      {...divProps}
      style={{
        ...divProps.style,
        backgroundImage: `url(${resolvedUrl})`,
      }}
    >
      {children}
      {labelTag && (
        <div className={styles.imageLabel}>
          <Tag className={styles.tag}>{labelTag}</Tag>
        </div>
      )}
    </div>
  );
}
