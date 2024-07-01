import React from 'react';
import {
  ImageGallery,
  ImageGalleryProps,
} from '../../imageGallery/ImageGallery';

import styles from '../pageModules.module.scss';

export function ImageGalleryModule(props: ImageGalleryProps) {
  return (
    <div className={styles.pageModuleWrapper}>
      <ImageGallery {...props} />
    </div>
  );
}
