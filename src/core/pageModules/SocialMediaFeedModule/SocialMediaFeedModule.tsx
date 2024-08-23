import React, { useLayoutEffect, useMemo, useRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import parse, { DOMNode } from 'html-react-parser';

import Text from '../../../common/components/text/Text';
import { useConfig } from '../../configProvider/useConfig';
import styles from '../pageModules.module.scss';
import isTrustedOrigin from '../../utils/isTrustedOrigin';

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
    htmlSanitizer: { trustedScriptsOrigins },
  } = useConfig();

  const scriptWrapperRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (scriptWrapperRef.current?.innerHTML) {
      const range = document.createRange();
      range.selectNode(scriptWrapperRef.current);
      const documentFragment = range.createContextualFragment(
        scriptWrapperRef.current.innerHTML,
      );
      scriptWrapperRef.current.innerHTML = '';
      scriptWrapperRef.current.append(documentFragment);
    }
  }, [scriptWrapperRef.current?.innerHTML]);

  const sanitizeScripts = (domNode: DOMNode, trustedOrigins: string[]) => {
    if ('attribs' in domNode) {
      if (
        domNode.name === 'script' &&
        !isTrustedOrigin(domNode.attribs.src, trustedOrigins)
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          'The unsafe social media feed script is not allowed. Please enable it in hcrc library configs.',
        );
        return <div />;
      }
    }

    return domNode;
  };

  const clean = useMemo(
    () =>
      DOMPurify.sanitize(script, {
        FORCE_BODY: true,
        ADD_TAGS: ['script', 'div'],
      }),
    [script],
  );

  const htmlReactParserOptions = {
    replace: (domNode) => sanitizeScripts(domNode, trustedScriptsOrigins),
  };

  return (
    <div id={anchor} className={styles.pageModuleWrapper}>
      {title && (
        <Text as="h2" variant="h2">
          {title}
        </Text>
      )}
      <div ref={scriptWrapperRef}>{parse(clean, htmlReactParserOptions)}</div>
    </div>
  );
}
