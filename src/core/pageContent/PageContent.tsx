import React from "react";

import { PageQuery } from "../../common/headlessService/page";
import useConfig from "../configProvider/useConfig";
import SidebarContent from "./sidebarContent/SidebarContent";
import PageContentLayout from "./PageContentLayout";
import PageMainContent from "./PageMainContent";
import PageContentBreadcrumbs from "./PageContentBreadcrumbs";
import { Breadcrumb } from "./types";
import PageMeta from "./meta/PageMeta";
import Collection from "../collection/Collection";
import { ArticleQuery } from "../../common/headlessService/__generated__";
import { ArticleType, PageType } from "../../common/headlessService/types";

export type PageContentProps = {
  page?: PageQuery["page"] | ArticleQuery["post"];
  breadcrumbs?: Breadcrumb[];
  collections?: React.ReactElement<typeof Collection>[];
  heroContainer?: JSX.Element;
  backUrl?: string;
};

export function PageContent({
  page,
  breadcrumbs,
  collections,
  heroContainer,
  backUrl,
}: PageContentProps) {
  const {
    components: { Head },
  } = useConfig();
  return (
    <>
      {Head && <PageMeta headComponent={Head} page={page} />}
      <PageContentLayout
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
        collections={collections}
        sidebarContent={
          <SidebarContent content={(page as PageType)?.sidebar} />
        }
      />
    </>
  );
}
