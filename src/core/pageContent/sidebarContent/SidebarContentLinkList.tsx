import { IconArrowRight } from 'hds-react';
import React from 'react';

import HtmlToReact from '../../../common/components/htmlToReact/HtmlToReact';
import List from '../../../common/components/list/List';
import { LayoutLinkList } from '../../../common/headlessService/types';
import { useConfig } from '../../configProvider/useConfig';
import { Link } from '../../link/Link';
import styles from './sidebarContentLinkList.module.scss';

type LinkItem = {
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
  const {
    utils: { getIsHrefExternal },
  } = useConfig();

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
          ?.filter((item): item is LinkItem => Boolean(item))
          .map((link) => (
            <Link
              key={link.title}
              href={link.url || '#'}
              className={styles.link}
              ariaLabel={link.title}
              iconRight={
                !getIsHrefExternal(link.url) && (
                  <IconArrowRight aria-hidden="true" />
                )
              }
              target={link.target}
            >
              {link.title}
            </Link>
          ))}
      />
    </div>
  );
}
