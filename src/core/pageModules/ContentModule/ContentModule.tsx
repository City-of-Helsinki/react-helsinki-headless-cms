import React from 'react';

import { HtmlToReact } from '../../../common/components/htmlToReact/HtmlToReact';
import { useConfig } from '../../configProvider/useConfig';
import { Link } from '../../link/Link';

export type ContentModuleProps = {
  content?: string;
  backgroundColor?: string;
  className?: string;
};

export function ContentModule({
  content,
  backgroundColor,
  className,
}: ContentModuleProps) {
  const {
    htmlSanitizer: { allowedUnsafeTags, trustedOrigins },
  } = useConfig();

  return (
    <div
      style={backgroundColor ? { backgroundColor } : {}}
      className={className}
    >
      <HtmlToReact
        components={{
          a: Link,
        }}
        allowedUnsafeTags={allowedUnsafeTags}
        trustedOrigins={trustedOrigins}
      >
        {content}
      </HtmlToReact>
    </div>
  );
}
