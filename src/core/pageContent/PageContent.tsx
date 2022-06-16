import React from "react";

import useConfig from "../configProvider/useConfig";
import SidebarContent from "./sidebarContent/SidebarContent";
import { PageContentLayout } from "./PageContentLayout";
import { PageMainContent } from "./PageMainContent";
import PageContentBreadcrumbs from "./PageContentBreadcrumbs";
import { Breadcrumb } from "./types";
import { PageMeta } from "./meta/PageMeta";
import { Collection } from "../collection/Collection";
import { ArticleType, PageType } from "../../common/headlessService/types";
import { Card } from "../card/Card";
import { getCollections, getCollectionCards } from "./utils";
import { ModuleItemTypeEnum } from "../../common/headlessService/constants";

export type PageContentProps = {
  page?: PageType | ArticleType;
  breadcrumbs?: Breadcrumb[];
  content?:
    | React.ReactNode
    | ((page: PageType | ArticleType) => React.ReactNode);
  collections?:
    | React.ReactElement<typeof Collection>[]
    | ((
        page: PageType | ArticleType
      ) => React.ReactElement<typeof Collection>[]);
  heroContainer?: JSX.Element;
  backUrl?: string;
  sidebarContentProps?: Partial<typeof SidebarContent>;
  PageContentLayoutComponent?: typeof PageContentLayout;
} & Partial<typeof PageContentLayout>;

export const defaultContent = (page: PageType | ArticleType) => (
  <PageMainContent
    title={page?.title}
    content={page?.content}
    date={(page as ArticleType)?.date}
    categories={(page as ArticleType)?.categories}
  />
);

export const defaultCollections = (
  page: PageType | ArticleType,
  getRoutedInternalHref: (link: string, type: ModuleItemTypeEnum) => string
) =>
  getCollections(page?.modules)?.map((collection) => {
    const collectionType = null;
    const cards = getCollectionCards(collection).map((cardProps) => {
      const url = getRoutedInternalHref(cardProps.url, collectionType);
      return <Card key={cardProps.id} {...cardProps} url={url} />;
    });
    return (
      <Collection
        key={`collection-${Math.random()}`}
        title={collection.title}
        cards={cards}
        type="grid"
        collectionContainerProps={{ withDots: false }}
      />
    );
  });

export function PageContent(props: PageContentProps) {
  const {
    page,
    breadcrumbs,
    collections,
    heroContainer,
    backUrl,
    sidebarContentProps,
    PageContentLayoutComponent = PageContentLayout,
    content,
    ...pageContentLayoutProps
  } = props;

  const {
    components: { Head },
    utils: { getRoutedInternalHref },
  } = useConfig();
  return (
    <>
      {Head && <PageMeta headComponent={Head} page={page} />}
      <PageContentLayoutComponent
        {...props}
        {...pageContentLayoutProps}
        breadcrumbs={
          breadcrumbs && <PageContentBreadcrumbs breadcrumbs={breadcrumbs} />
        }
        heroContainer={heroContainer}
        imageSrc={page?.featuredImage?.node?.mediaItemUrl}
        imageAlt={page?.featuredImage?.node?.altText}
        imageLabel={page?.featuredImage?.node?.altText}
        backUrl={backUrl}
        content={
          typeof content === "function"
            ? content(page)
            : content ?? defaultContent(page)
        }
        collections={
          typeof collections === "function"
            ? collections(page)
            : collections ?? defaultCollections(page, getRoutedInternalHref)
        }
        sidebarContent={
          <SidebarContent
            content={(page as PageType)?.sidebar}
            {...sidebarContentProps}
          />
        }
      />
    </>
  );
}
