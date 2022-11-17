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
    canonicalUrl,
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
      {page?.translations?.map((translation) => (
        <link
          key={translation?.language?.locale}
          rel="alternate"
          hrefLang={translation?.language?.locale}
          href={translation?.seo?.canonicalUrl}
        />
      ))}
      <link
        rel="alternate"
        hrefLang={page?.language?.locale}
        href={page?.seo?.canonicalUrl}
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={meta?.favIconUrl} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={meta?.appleTouchIconUrl}
      />
    </Head>
  );
}
