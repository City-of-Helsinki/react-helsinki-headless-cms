import React, { useLayoutEffect, useRef } from 'react';

import Text from '../../../common/components/text/Text';
import { useConfig } from '../../configProvider/useConfig';
import styles from '../pageModules.module.scss';

export interface SocialMediaFeedModuleProps {
  anchor: string;
  title?: string;
  script?: string;
}

export function SocialMediaFeedModule({
  anchor,
  title,
  script,
}: SocialMediaFeedModuleProps) {
  const {
    htmlSanitizer: { allowUnsafeSocialMediaScript },
  } = useConfig();

  const scriptWrapperRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (allowUnsafeSocialMediaScript) {
      const range = document.createRange();
      range.selectNode(scriptWrapperRef.current);
      const documentFragment = range.createContextualFragment(script);
      scriptWrapperRef.current.innerHTML = '';
      scriptWrapperRef.current.append(documentFragment);
    }
  }, [script, allowUnsafeSocialMediaScript]);

  if (!script) return null;

  if (!allowUnsafeSocialMediaScript) {
    // eslint-disable-next-line no-console
    console.warn(
      'The unsafe social media feed script is not allowed. Please enable it in hcrc library configs.',
    );
    return null;
  }

  return (
    <div id={anchor} className={styles.pageModuleWrapper}>
      {title && (
        <Text as="h2" variant="h2">
          {title}
        </Text>
      )}
      <div ref={scriptWrapperRef} />
    </div>
  );
}
