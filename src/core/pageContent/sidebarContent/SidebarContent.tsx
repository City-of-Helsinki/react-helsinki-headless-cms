import React from "react";

import List from "../../../common/components/list/List";
import { SidebarContent as SidebarContentType } from "../../../common/headlessService/types";
import {
  isLayoutArticle,
  isLayoutLinkList,
  isLayoutPage,
} from "../../../common/headlessService/utils";
import SidebarContentLinkList from "./SidebarContentLinkList";
import SidebarPostListItem from "./SidebarPostListItem";

type Props = {
  content?: SidebarContentType;
};

export default function SidebarContent({ content }: Props) {
  return (
    <List
      variant="spacing-3-xl"
      items={
        content?.map((item) => {
          if (isLayoutLinkList(item)) {
            return (
              <SidebarContentLinkList
                key={item.title}
                title={item.title}
                links={item.links}
                description={item.description}
                anchor={item.anchor}
              />
            );
          }

          if (isLayoutPage(item)) {
            return (
              <List
                key="pages"
                variant="spacing-3-xl"
                items={item?.pages?.map((page) => (
                  <SidebarPostListItem key={page?.id} {...page} />
                ))}
              />
            );
          }

          if (isLayoutArticle(item)) {
            return (
              <List
                key="articles"
                variant="spacing-3-xl"
                items={item?.articles?.map((article) => (
                  <SidebarPostListItem key={article?.id} {...article} />
                ))}
              />
            );
          }

          return null;
        }) ?? []
      }
    />
  );
}
