import React from 'react';

import { useConfig } from '../configProvider/useConfig';

type BasicMetaProps = {
  /**
   * Archive page meta title tag contents.
   */
  title?: string;
  /**
   * Archive page meta description tag contents.
   */
  description?: string;
};

function BasicMeta({ title, description }: BasicMetaProps) {
  const {
    components: { Head },
    meta,
  } = useConfig();
  if (!Head) {
    // eslint-disable-next-line no-console
    console.warn("No Head component configured. Can't render meta tags.");
    return null;
  }
  return (
    <Head>
      {title && <meta property="title" content={title} />}
      {description && <meta property="description" content={description} />}
      {meta?.favIconUrl && <link rel="icon" href={meta.favIconUrl} />}
      {meta?.favIconSvgUrl && (
        <link rel="icon" href={meta.favIconSvgUrl} type="image/svg+xml" />
      )}
      {meta?.appleTouchIconUrl && (
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={meta.appleTouchIconUrl}
        />
      )}
      {meta?.manifestUrl && <link rel="manifest" href={meta.manifestUrl} />}
    </Head>
  );
}

export default BasicMeta;
