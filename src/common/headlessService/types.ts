import {
  MenuQuery,
  PageQuery,
  ArticleQuery,
  PagesQuery,
  PostsQuery,
  PageChildrenSearchQuery,
  EventSearchFragment,
  EventSearchCarouselFragment,
  EventSelectedFragment,
  EventSelectedCarouselFragment,
} from './__generated__';

export type Menu = MenuQuery['menu'];
export type PageType = PageQuery['page'];
export type ArticleType = ArticleQuery['post'];
export type SidebarContent = PageQuery['page']['sidebar'];
export type PageModule = PageQuery['page']['modules'][number];
export type PageSidebarModule = PageQuery['page']['sidebar'][number];
export type Articles = PostsQuery['posts'];
export type Pages = PagesQuery['pages'];
export type PageChildren = PageChildrenSearchQuery['page']['children'];
export type EventModule =
  | EventSearchFragment
  | EventSearchCarouselFragment
  | EventSelectedFragment
  | EventSelectedCarouselFragment;

export type {
  MenuItemFragment as MenuItem,
  LanguageFragment as Language,
  LayoutLinkListFragment as LayoutLinkList,
  LayoutArticlesFragment as LayoutArticle,
  LayoutPagesFragment as LayoutPage,
  LayoutArticlesCarouselFragment as LayoutArticleCarousel,
  LayoutPagesCarouselFragment as LayoutPageCarousel,
  EventSearchFragment as EventSearch,
  EventSelectedFragment as EventSelected,
  EventSearchCarouselFragment as EventSearchCarousel,
  EventSelectedCarouselFragment as EventSelectedCarousel,
  Notification as NotificationType,
} from './__generated__';

export {
  LanguageCodeEnum,
  MenuNodeIdTypeEnum,
  TemplateEnum,
} from './__generated__';
