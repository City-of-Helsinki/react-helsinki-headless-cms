import React from 'react';

import List from '../../../common/components/list/List';
import { ModuleItemTypeEnum } from '../../../common/headlessService/constants';
import { SidebarContent as SidebarContentType } from '../../../common/headlessService/types';
import {
  isLayoutArticle,
  isLayoutCards,
  isLayoutLinkList,
  isLayoutPage,
} from '../../../common/headlessService/utils';
import SidebarContentLinkList from './SidebarContentLinkList';
import SidebarPostListItem from './SidebarPostListItem';
import SidebarCardsList from './SidebarCardsList';

type SidebarContentProps = {
  content?: SidebarContentType;
  SidebarContentLinkListComponent?: typeof SidebarContentLinkList;
  SidebarPostListComponent?: typeof List;
  SideBarPostListItemComponent?: typeof SidebarPostListItem;
  SideBarCardsListComponent?: typeof SidebarCardsList;
};

export default function SidebarContent({
  content,
  SidebarContentLinkListComponent = SidebarContentLinkList,
  SidebarPostListComponent = List,
  SideBarPostListItemComponent = SidebarPostListItem,
  SideBarCardsListComponent = SidebarCardsList,
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
                  <SideBarPostListItemComponent
                    key={page?.id}
                    {...page}
                    moduleItemType={ModuleItemTypeEnum.Page}
                  />
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
                    moduleItemType={ModuleItemTypeEnum.Article}
                  />
                ))}
              />
            );
          }

          if (isLayoutCards(item)) {
            return <SideBarCardsListComponent key="cards" cards={item.cards} />;
          }

          return null;
        }) ?? []
      }
    />
  );
}
