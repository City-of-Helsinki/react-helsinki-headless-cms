import React from "react";

import { PageQuery } from "../../common/headlessService/page";
import useConfig from "../configProvider/useConfig";
import SidebarContent from "./sidebarContent/SidebarContent";
import { PageContentLayout } from "./PageContentLayout";
import { PageMainContent } from "./PageMainContent";
import PageContentBreadcrumbs from "./PageContentBreadcrumbs";
import { Breadcrumb } from "./types";
import { PageMeta } from "./meta/PageMeta";
import { Collection } from "../collection/Collection";
import { ArticleQuery } from "../../common/headlessService/__generated__";
import { ArticleType, PageType } from "../../common/headlessService/types";
import { Card } from "../card/Card";
import { getCollections, getCollectionCards } from "./utils";

export type PageContentProps = {
  page?: PageQuery["page"] | ArticleQuery["post"];
  breadcrumbs?: Breadcrumb[];
  collections?: React.ReactElement<typeof Collection>[];
  heroContainer?: JSX.Element;
  backUrl?: string;
  sidebarContentProps?: Partial<typeof SidebarContent>;
  PageContentLayoutComponent?: typeof PageContentLayout;
} & Partial<typeof PageContentLayout>;

export const defaultCollections = (
  page: PageQuery["page"] | ArticleQuery["post"]
) =>
  getCollections(page?.modules)?.map((collection) => (
    <Collection
      key={`collection-${Math.random()}`}
      title={collection.title}
      cards={getCollectionCards(collection).map((cardProps) => (
        <Card key={cardProps.id} {...cardProps} />
      ))}
      type="grid"
      collectionContainerProps={{ withDots: false }}
    />
  ));

export function PageContent(props: PageContentProps) {
  const {
    page,
    breadcrumbs,
    collections,
    heroContainer,
    backUrl,
    sidebarContentProps,
    PageContentLayoutComponent = PageContentLayout,
    ...pageContentLayoutProps
  } = props;

  const {
    components: { Head },
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
          <PageMainContent
            title={page?.title}
            content={page?.content}
            date={(page as ArticleType)?.date}
            categories={(page as ArticleType)?.categories}
          />
        }
        collections={collections ?? defaultCollections(page)}
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
