import {
  MenuQuery,
  PageQuery,
  ArticleQuery,
  PagesQuery,
  PostsQuery,
  PageChildrenSearchQuery,
  CategoryQuery,
  TagQuery,
  CategoriesQuery,
  TagsQuery,
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
export type Category = CategoryQuery['category'];
export type Categories = CategoriesQuery['categories'];
export type Tag = TagQuery['tag'];
export type Tags = TagsQuery['tags'];
export type SearchTag = Category | Tag;
export type {
  MenuItemFragment as MenuItem,
  LanguageFragment as Language,
  LayoutLinkListFragment as LayoutLinkList,
  LayoutArticlesFragment as LayoutArticle,
  LayoutPagesFragment as LayoutPage,
  LayoutArticlesCarouselFragment as LayoutArticleCarousel,
  LayoutPagesCarouselFragment as LayoutPageCarousel,
  LayoutContentFragment as LayoutContent,
  LayoutCardFragment as LayoutCard,
  LayoutCardsFragment as LayoutCards,
  LayoutImageFragment as LayoutImage,
  LayoutStepsFragment as LayoutSteps,
  EventSearchFragment as EventSearch,
  EventSelectedFragment as EventSelected,
  EventSearchCarouselFragment as EventSearchCarousel,
  EventSelectedCarouselFragment as EventSelectedCarousel,
  LocationsSelectedFragment as LocationsSelected,
  LocationsSelectedCarouselFragment as LocationsSelectedCarousel,
  Notification as NotificationType,
} from './__generated__';

export {
  LanguageCodeEnum,
  LanguageCodeFilterEnum,
  MenuNodeIdTypeEnum,
  PageIdType,
  TemplateEnum,
} from './__generated__';
