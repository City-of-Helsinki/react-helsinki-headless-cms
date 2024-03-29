import React from 'react';

import { ArticleType, PageType } from '../../../common/headlessService/types';
import { useConfig } from '../../configProvider/useConfig';

export type PageMetaProps = {
  page?: PageType | ArticleType;
  headComponent: React.ComponentType<{ children: React.ReactNode }>;
};

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function unescapeDash(str?: string): string {
  if (!str) {
    return str ?? '';
  }

  return replaceAll(str, '&#x2d;', '-');
}

export function PageMeta({ page, headComponent: Head }: PageMetaProps) {
  const seoForCurrentLanguage = page?.seo;
  const {
    title,
    description,
    twitterTitle,
    twitterDescription,
    openGraphTitle,
    openGraphType,
    openGraphDescription,
  } = seoForCurrentLanguage ?? {};
  const image = seoForCurrentLanguage?.socialImage?.mediaItemUrl;

  const { meta } = useConfig();

  return (
    <Head>
      <title>{unescapeDash(title)}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={openGraphTitle} />
      {openGraphDescription && (
        <meta property="og:description" content={openGraphDescription} />
      )}
      {image && <meta property="og:image" content={image} />}
      {openGraphType && <meta property="og:type" content={openGraphType} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      <link rel="icon" href={meta?.favIconUrl} sizes="any" />
      <link rel="icon" href={meta?.favIconSvgUrl} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={meta?.appleTouchIconUrl} />
      <link rel="manifest" href={meta?.manifestUrl} />
    </Head>
  );
}
