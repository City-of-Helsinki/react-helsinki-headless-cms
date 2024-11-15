import React from 'react';

import type { ImageGalleryProps } from '../../imageGallery/ImageGallery';
import { ImageGallery } from '../../imageGallery/ImageGallery';
import styles from '../pageModules.module.scss';

export function ImageGalleryModule(props: ImageGalleryProps) {
  return (
    <div className={styles.pageModuleWrapper}>
      <ImageGallery {...props} />
    </div>
  );
}
