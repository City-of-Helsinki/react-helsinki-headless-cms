import React from 'react';

/**
 * An iframe HTML-element to securely render
 * a sandboxed version of an embedded video media player, e.g. from the CMS.
 * */
export default function IframeForEmbeddedMedia(
  props: React.PropsWithChildren<React.IframeHTMLAttributes<HTMLIFrameElement>>,
) {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      {...props}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
    />
  );
}
