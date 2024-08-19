import React, { useLayoutEffect, useRef } from 'react';

import Text from '../../../common/components/text/Text';
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
  const scriptWrapperRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const range = document.createRange();
    range.selectNode(scriptWrapperRef.current);
    const documentFragment = range.createContextualFragment(script);

    scriptWrapperRef.current.innerHTML = '';
    scriptWrapperRef.current.append(documentFragment);
  }, [script]);

  if (!script) return null;

  return (
    <div id={anchor} className={styles.pageModuleWrapper}>
      {title && (
        <Text as="h2" variant="h2">
          {title}
        </Text>
      )}
      <div
        ref={scriptWrapperRef}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: script }}
      />
    </div>
  );
}
