import React from 'react';

import styles from './BackgroundImage.module.scss';
import { Tag } from '../../common/components/tag/Tag';
import { useResolveImageUrl } from '../hooks/useResolveImageUrl';

export type BackgroundImageProps = {
  /**
   * Background image id.
   */
  id: string;
  /**
   * Background image url.
   */
  url?: string | null;
  /**
   * Background fallback image url.
   */
  customFallbackUrl?: string;
  /**
   * Background image label tag.
   */
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
