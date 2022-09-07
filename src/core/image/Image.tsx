import React from 'react';

import { useResolveImageUrl } from '../hooks/useResolveImageUrl';

export type ImageProps = {
  id: string;
  src: string;
  alt: string;
  customFallbackSrc?: string;
  caption?: string;
} & Omit<React.HTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;

export function Image({
  id,
  src,
  alt,
  customFallbackSrc,
  caption,
  style,
  ...imageProps
}: ImageProps) {
  const resolvedUrl = useResolveImageUrl({
    id,
    url: src,
    customFallbackUrl: customFallbackSrc,
  });

  return (
    <figure style={style}>
      <img {...imageProps} src={resolvedUrl} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
