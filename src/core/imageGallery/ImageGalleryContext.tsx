import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface ImageGalleryContextProps {
  imageIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
  selectedImageIndex: number;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
  isLightboxVisible: boolean;
  setIsLightboxVisible: Dispatch<SetStateAction<boolean>>;
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
