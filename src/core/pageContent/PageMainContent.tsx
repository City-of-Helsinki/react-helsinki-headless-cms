import React from 'react';

import { HtmlToReact } from '../../common/components/htmlToReact/HtmlToReact';
import Text from '../../common/components/text/Text';
import { ArticleType } from '../../common/headlessService/types';
import styles from './pageMainContent.module.scss';
import { formatDateFromString } from '../../common/utils/dates';
import { Tag } from '../../common/components/tag/Tag';
import { Link } from '../link/Link';
import { useConfig } from '../configProvider/useConfig';

export type PageMainContentProps = {
  title: string;
  content: string;
  date?: string;
  categories?: ArticleType['categories'];
  contentModules?: React.ReactNode[];
};

export function PageMainContent({
  title,
  content,
  date,
  categories,
  contentModules,
}: PageMainContentProps) {
  const {
    htmlSanitizer: { allowedUnsafeTags, trustedOrigins },
  } = useConfig();

  return (
    <article className={styles.mainContent}>
      <header>
        <Text as="h1" variant="h1">
          {title}
        </Text>
      </header>
      {(date || categories) && (
        <div className={styles.articleData}>
          {date && (
            <div className={styles.articleDate}>
              {formatDateFromString(date || '')}
            </div>
          )}
          {categories?.edges?.map((category) => (
            <Tag className={styles.tag} key={category.node?.id}>
              {category.node?.name}
            </Tag>
          ))}
        </div>
      )}
      <HtmlToReact
        components={{
          a: Link,
        }}
        allowedUnsafeTags={allowedUnsafeTags}
        trustedOrigins={trustedOrigins}
      >
        {content}
      </HtmlToReact>
      {contentModules?.length > 0 && contentModules}
    </article>
  );
}
