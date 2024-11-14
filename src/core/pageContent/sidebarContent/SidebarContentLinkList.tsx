import { IconArrowRight } from 'hds-react';
import React from 'react';
import parse from 'html-react-parser';

import { HtmlToReact } from '../../../common/components/htmlToReact/HtmlToReact';
import List from '../../../common/components/list/List';
import type { LayoutLinkList } from '../../../common/headlessService/types';
import { useConfig } from '../../configProvider/useConfig';
import { Link } from '../../link/Link';
import styles from './sidebarContentLinkList.module.scss';
import { isLinkItem } from '../../../common/headlessService/utils';

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
    <div className={styles.listContainer} id={anchor || undefined}>
      <h2>{title}</h2>
      {description && (
        <div className={styles.descriptionContainer}>
          <HtmlToReact>{description}</HtmlToReact>
        </div>
      )}
      <List
        variant="spacing-s"
        items={links
          ?.filter((item) => isLinkItem(item))
          .map((link) => (
            <Link
              key={link.title}
              href={parse(link.url).toString() || '#'}
              className={styles.link}
              iconRight={
                !getIsHrefExternal(link.url) && (
                  <IconArrowRight aria-hidden="true" />
                )
              }
            >
              {link.title}
            </Link>
          ))}
      />
    </div>
  );
}
