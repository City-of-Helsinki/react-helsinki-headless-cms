import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

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

export function getUri(
  link: string,
  internalHrefOrigins: string[],
  getIsHrefExternal: (href: string) => boolean
) {
  // A valid internal or external URL
  if (getIsHrefExternal(link) || link.startsWith("/")) {
    return link;
  }

  let uri = link;
  // Replace all the internal link origins with empty to make dynamic internal URLs
  internalHrefOrigins.forEach((origin) => {
    uri = uri.replace(origin, "");
  });

  return uri;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
const getNodeText = (node: any): string => {
  if (["string", "number"].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join("");
  if (typeof node === "object" && node) return getNodeText(node.props.children);
  return node;
};

export function getElementTextContent(dirty: string): string {
  return getNodeText(parse(DOMPurify.sanitize(dirty)));
}
