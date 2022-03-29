import { MenuQuery, PageQuery } from "./__generated__";

export type Menu = MenuQuery["menu"];
export type PageType = PageQuery["page"];
export type SidebarContent = PageQuery["page"]["translation"]["sidebar"];

export type {
  MenuItemFragment as MenuItem,
  LanguageFragment as Language,
  LayoutLinkListFragment as LayoutLinkList,
  LayoutArticlesFragment as LayoutArticle,
  LayoutPagesFragment as LayoutPage,
} from "./__generated__";
export { LanguageCodeEnum, MenuNodeIdTypeEnum } from "./__generated__";
