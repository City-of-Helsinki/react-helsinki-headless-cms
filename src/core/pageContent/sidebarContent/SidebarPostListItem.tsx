import React from "react";

import {
  LayoutArticle,
  LayoutPage,
} from "../../../common/headlessService/types";
import SidebarContentCard from "./SidebarContentCard";

type PostListItemProps =
  | LayoutArticle["articles"][number]
  | LayoutPage["pages"][number];

export default function PostListItem({
  id,
  title,
  link,
  featuredImage,
}: PostListItemProps) {
  if (!title || !link) {
    return null;
  }

  return (
    <SidebarContentCard
      key={id}
      title={title}
      url={link}
      imageUrl={featuredImage?.node?.mediaItemUrl || undefined}
      imageAlt={featuredImage?.node?.altText || undefined}
    />
  );
}
