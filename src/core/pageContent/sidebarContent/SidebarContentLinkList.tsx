import { IconArrowRight, IconLinkExternal } from 'hds-react';
import React from 'react';

import ExternalLink from '../../../common/components/externalLink/ExternalLink';
import HtmlToReact from '../../../common/components/htmlToReact/HtmlToReact';
import List from '../../../common/components/list/List';
import { LayoutLinkList } from '../../../common/headlessService/types';
import styles from './sidebarContentLinkList.module.scss';

type Link = {
  target?: string | null;
  title?: string | null;
  url?: string | null;
};

type SidebarContentLinkListProps = Omit<LayoutLinkList, '__typename'>;

export default function SidebarContentLinkList({
  anchor,
  title,
  description,
  links,
}: SidebarContentLinkListProps) {
  return (
    <div id={anchor || undefined}>
      <h2>{title}</h2>
      {description && (
        <div className={styles.descriptionContainer}>
          <HtmlToReact>{description}</HtmlToReact>
        </div>
      )}
      <List
        variant="spacing-s"
        items={links
          ?.filter((item): item is Link => Boolean(item))
          .map((link) =>
            link.target === '_blank' ? (
              <ExternalLink
                key={link.title}
                href={link.url || '#'}
                className={styles.link}
                iconLeft={<IconLinkExternal aria-hidden="true" />}
              >
                {link.title}
              </ExternalLink>
            ) : (
              <a
                key={link.title}
                href={link.url || '#'}
                className={styles.link}
              >
                <IconArrowRight aria-hidden="true" />
                {link.title}
              </a>
            ),
          )}
      />
    </div>
  );
}
