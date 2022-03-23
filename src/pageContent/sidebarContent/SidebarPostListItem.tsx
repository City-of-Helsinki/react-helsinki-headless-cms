import React from "react";

import { LayoutArticle, LayoutPage } from "../../common/headlessService/types";
import SidebarContentCard from "./SidebarContentCard";

type Props = LayoutArticle["articles"][number] | LayoutPage["pages"][number];

export default function PostListItem({
  id,
  title,
  link,
  featuredImage,
}: Props) {
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
