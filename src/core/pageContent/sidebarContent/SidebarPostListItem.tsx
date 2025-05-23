import React from 'react';

import type { ModuleItemTypeEnum } from '../../../common/headlessService/constants';
import type {
  LayoutArticle,
  LayoutPage,
} from '../../../common/headlessService/types';
import { useHeadlessCmsLink } from '../../configProvider/useHeadlessCmsLink';
import SidebarContentCard from './SidebarContentCard';

type PostListItemProps = (
  | LayoutArticle['articles'][number]
  | LayoutPage['pages'][number]
) & { moduleItemType: ModuleItemTypeEnum };

export default function PostListItem({
  id,
  moduleItemType,
  title,
  link,
  featuredImage,
  date,
}: PostListItemProps) {
  const url = useHeadlessCmsLink(link, moduleItemType);

  if (!title || !url) {
    return null;
  }

  return (
    <SidebarContentCard
      key={id}
      id={id}
      title={title}
      publishingDate={date}
      url={url}
      imageUrl={featuredImage?.node?.medium || undefined}
      imageAlt={featuredImage?.node?.altText || undefined}
    />
  );
}
