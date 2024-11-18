import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface ImageGalleryContextProps {
  /**
   * Image index.
   */
  imageIndex: number;
  /**
   * Set Image index.
   */
  setImageIndex: Dispatch<SetStateAction<number>>;
  /**
   * Selected Image index.
   */
  selectedImageIndex: number;
  /**
   * Set selected Image index.
   */
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
  /**
   *  Boolean indicating whether the lightbox is visible.
   */
  isLightboxVisible: boolean;
  /**
   * Set is Iamge lightbox visible.
   */
  setIsLightboxVisible: Dispatch<SetStateAction<boolean>>;
  /**
   * Toggle lightbox method.
   */
  toggleLightbox: () => void;
}

export const ImageGalleryContext = createContext<ImageGalleryContextProps>({
  imageIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setImageIndex: () => {},
  selectedImageIndex: -1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedImageIndex: () => {},
  isLightboxVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLightboxVisible: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleLightbox: () => {},
});
