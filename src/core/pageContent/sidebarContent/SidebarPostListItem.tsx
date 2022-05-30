import React from "react";

import {
  LayoutArticle,
  LayoutPage,
} from "../../../common/headlessService/types";
import useHeadlessCmsLink from "../../configProvider/useHeadlessCmsLink";
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
  const url = useHeadlessCmsLink(link);

  if (!title || !url) {
    return null;
  }

  return (
    <SidebarContentCard
      key={id}
      title={title}
      url={url}
      imageUrl={featuredImage?.node?.mediaItemUrl || undefined}
      imageAlt={featuredImage?.node?.altText || undefined}
    />
  );
}
