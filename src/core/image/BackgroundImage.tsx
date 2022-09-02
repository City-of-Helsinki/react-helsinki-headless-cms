import React from 'react';

import testImage from '../../common/utils/testImage';
import styles from './BackgroundImage.module.scss';
import { Tag } from '../../common/components/tag/Tag';
import { useBackgroundFallbackImageUrl } from '../hooks/useBackgroundFallbackImageUrl';

export type BackgroundImageProps = {
  url: string;
  customFallbackUrl?: string;
  labelTag?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line import/prefer-default-export
export function BackgroundImage({
  url,
  customFallbackUrl,
  labelTag,
  children,
  ...divProps
}: BackgroundImageProps) {
  const [showBackupImage, setShowBackupImage] = React.useState(false);
  const defaultFallbackUrl = useBackgroundFallbackImageUrl(url);
  const fallbackUrl = customFallbackUrl ?? defaultFallbackUrl;
  React.useEffect(() => {
    const testThatImageExist = async () => {
      try {
        await testImage(url);
      } catch {
        setShowBackupImage(true);
      }
    };
    testThatImageExist();
  }, [url]);

  return (
    <div
      {...divProps}
      style={{
        ...divProps.style,
        backgroundImage: `url(${showBackupImage ? fallbackUrl : url})`,
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
