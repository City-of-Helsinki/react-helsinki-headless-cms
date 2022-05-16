import {
  LayoutArticle,
  LayoutLinkList,
  LayoutPage,
  PageModule,
  PageSidebarModule,
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
