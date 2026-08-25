import React, { useLayoutEffect, useMemo, useRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

import Text from '../../../common/components/text/Text';
import { useConfig } from '../../configProvider/useConfig';
import styles from '../pageModules.module.scss';
import isTrustedOrigin from '../../utils/isTrustedOrigin';

export interface SocialMediaFeedModuleProps {
  anchor: string;
  title?: string;
  script?: string;
}

// Trusted script sources are read from the raw markup with DOMParser, which
// never executes scripts or fetches resources. This keeps 'script' out of
// DOMPurify's ADD_TAGS (see typescript:S8479) while still allowing embeds
// from configured trusted origins to load, via a real <script> element
// instead of re-executing sanitized markup.
//
// Browser-only: DOMParser does not exist in Node, so this must be called from
// an effect and never during render, which also runs on the server.
function getTrustedScriptSrcs(html: string, trustedOrigins: string[]) {
  const { body } = new DOMParser().parseFromString(html, 'text/html');

  return Array.from(body.querySelectorAll('script[src]'))
    .map((scriptElement) => scriptElement.getAttribute('src'))
    .filter((src): src is string => {
      if (isTrustedOrigin(src ?? undefined, trustedOrigins)) {
        return true;
      }

      // eslint-disable-next-line no-console
      console.warn(
        'The unsafe social media feed script is not allowed. Please enable it in hcrc library configs.',
      );
      return false;
    });
}

export function SocialMediaFeedModule({
  anchor,
  title,
  script,
}: SocialMediaFeedModuleProps) {
  const {
    htmlSanitizer: { trustedOrigins },
  } = useConfig();

  const scriptWrapperRef = useRef<HTMLDivElement>(null);

  const clean = useMemo(
    () => DOMPurify.sanitize(script ?? '', { FORCE_BODY: true }),
    [script],
  );

  // Consumers commonly pass an inline config literal, so trustedOrigins is a
  // fresh array on every render. Key the effect on the values instead of the
  // array identity, otherwise every re-render injects another copy.
  const trustedOriginsKey = (trustedOrigins ?? []).join(',');

  useLayoutEffect(() => {
    const wrapper = scriptWrapperRef.current;

    if (!wrapper || !script) {
      return undefined;
    }

    const injected = getTrustedScriptSrcs(
      script,
      trustedOriginsKey ? trustedOriginsKey.split(',') : [],
    ).map((src) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = src;
      scriptElement.async = true;
      wrapper.append(scriptElement);
      return scriptElement;
    });

    return () => injected.forEach((scriptElement) => scriptElement.remove());
  }, [script, trustedOriginsKey]);

  return (
    <div id={anchor} className={styles.pageModuleWrapper}>
      {title && (
        <Text as="h2" variant="h2">
          {title}
        </Text>
      )}
      <div ref={scriptWrapperRef}>{parse(clean)}</div>
    </div>
  );
}
