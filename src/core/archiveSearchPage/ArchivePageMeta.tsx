import React from 'react';

import { useConfig } from '../configProvider/useConfig';

function BasicMeta() {
  const {
    components: { Head },
    meta,
  } = useConfig();
  return (
    <Head>
      {meta.title && <meta property="title" content={meta.title} />}
      {meta.description && (
        <meta property="description" content={meta.description} />
      )}
      {meta.favIconUrl && <link rel="icon" href={meta.favIconUrl} />}
      {meta.favIconSvgUrl && (
        <link rel="icon" href={meta.favIconSvgUrl} type="image/svg+xml" />
      )}
      {meta.appleTouchIconUrl && (
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={meta.appleTouchIconUrl}
        />
      )}
      {meta.manifestUrl && <link rel="manifest" href={meta.manifestUrl} />}
    </Head>
  );
}

export default BasicMeta;
