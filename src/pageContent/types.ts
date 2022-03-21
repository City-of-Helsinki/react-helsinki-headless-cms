type Maybe<T> = T | null | undefined;

export type LayoutLinkList = {
  anchor?: Maybe<string>;
  title?: Maybe<string>;
  description?: Maybe<string>;
  links?: Maybe<
    Maybe<{
      target?: Maybe<string>;
      title?: Maybe<string>;
      url?: Maybe<string>;
    }>[]
  >;
};

export type PageOrPost = {
  id: string;
  title?: Maybe<string>;
  link?: Maybe<string>;
  featuredImage?: Maybe<{
    node?: Maybe<{
      altText?: Maybe<string>;
      mediaItemUrl?: Maybe<string>;
    }>;
  }>;
};

type LayoutArticles = {
  articles?: Maybe<Maybe<PageOrPost>[]>;
};

type LayoutPages = {
  pages?: Maybe<Maybe<PageOrPost>[]>;
};

export type SidebarContentType = Maybe<
  Maybe<LayoutLinkList | LayoutArticles | LayoutPages>[]
>;

export type SEO = Maybe<{
  __typename?: "SEO";
  title?: Maybe<string>;
  description?: Maybe<string>;
  openGraphTitle?: Maybe<string>;
  openGraphDescription?: Maybe<string>;
  openGraphType?: Maybe<string>;
  twitterTitle?: Maybe<string>;
  twitterDescription?: Maybe<string>;
}>;

export type Page = {
  id: string;
  content?: Maybe<string>;
  title?: Maybe<string>;
  featuredImage?: Maybe<{
    node?: Maybe<{
      mediaItemUrl?: Maybe<string>;
      link?: Maybe<string>;
      altText?: Maybe<string>;
      mimeType?: Maybe<string>;
      title?: Maybe<string>;
      uri?: Maybe<string>;
    }>;
  }>;
  sidebar?: SidebarContentType;
};

export type Breadcrumb = {
  title: string;
  link: string;
};
