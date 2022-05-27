import { CollectionItemType } from "../../core/collection/types";
import {
  ArticleType,
  LayoutArticle,
  LayoutLinkList,
  LayoutPage,
  PageModule,
  PageSidebarModule,
  PageType,
} from "./types";

export function isLayoutArticle(
  module: PageModule | PageSidebarModule
): module is LayoutArticle {
  return (<LayoutArticle>module).articles !== undefined;
}

export function isLayoutPage(
  module: PageModule | PageSidebarModule
): module is LayoutPage {
  return (<LayoutPage>module).pages !== undefined;
}

export function isLayoutLinkList(
  module: PageModule | PageSidebarModule
): module is LayoutLinkList {
  return (<LayoutLinkList>module).links !== undefined;
}

export function isArticleType(item: CollectionItemType): item is ArticleType {
  return (<ArticleType>item).categories !== undefined;
}

export function isPageType(item: CollectionItemType): item is PageType {
  return (<PageType>item).sidebar !== undefined;
}
