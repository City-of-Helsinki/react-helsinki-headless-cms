import { MenuQuery, PageQuery, PostsQuery } from "./__generated__";

export type Menu = MenuQuery["menu"];
export type PageType = PageQuery["page"];
export type SidebarContent = PageQuery["page"]["sidebar"];
export type PageModule = PageQuery["page"]["modules"][number];
export type PageSidebarModule = PageQuery["page"]["sidebar"][number];
export type Articles = PostsQuery["posts"];

export type {
  MenuItemFragment as MenuItem,
  LanguageFragment as Language,
  LayoutLinkListFragment as LayoutLinkList,
  LayoutArticlesFragment as LayoutArticle,
  LayoutPagesFragment as LayoutPage,
  Notification as NotificationType,
} from "./__generated__";
export { LanguageCodeEnum, MenuNodeIdTypeEnum } from "./__generated__";
