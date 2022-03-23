import React from "react";

import List from "../../common/components/list/List";
import { SidebarContent as SidebarContentType } from "../../common/headlessService/types";
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
          if ("title" in item) {
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

          if ("pages" in item) {
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

          if ("articles" in item) {
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
