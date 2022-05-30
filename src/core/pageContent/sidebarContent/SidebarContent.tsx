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

type SidebarContentProps = {
  content?: SidebarContentType;
  SidebarContentLinkListComponent?: typeof SidebarContentLinkList;
  SidebarPostListComponent?: typeof List;
  SideBarPostListItemComponent?: typeof SidebarPostListItem;
};

export default function SidebarContent({
  content,
  SidebarContentLinkListComponent = SidebarContentLinkList,
  SidebarPostListComponent = List,
  SideBarPostListItemComponent = SidebarPostListItem,
}: SidebarContentProps) {
  return (
    <List
      variant="spacing-3-xl"
      items={
        content?.map((item) => {
          if (isLayoutLinkList(item)) {
            return (
              <SidebarContentLinkListComponent
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
              <SidebarPostListComponent
                key="pages"
                variant="spacing-3-xl"
                items={item?.pages?.map((page) => (
                  <SideBarPostListItemComponent key={page?.id} {...page} />
                ))}
              />
            );
          }

          if (isLayoutArticle(item)) {
            return (
              <SidebarPostListComponent
                key="articles"
                variant="spacing-3-xl"
                items={item?.articles?.map((article) => (
                  <SideBarPostListItemComponent
                    key={article?.id}
                    {...article}
                  />
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
