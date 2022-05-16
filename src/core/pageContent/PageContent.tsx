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

export type PageContentProps = {
  page?: PageQuery["page"];
  breadcrumbs?: Breadcrumb[];
  collections?: React.ReactElement<typeof Collection>[];
};

export default function PageContent({
  page,
  breadcrumbs,
  collections,
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
        content={
          <PageMainContent
            title={page?.title}
            content={page?.content}
            imageSrc={page?.featuredImage?.node?.mediaItemUrl}
            imageAlt={page?.featuredImage?.node?.altText}
          />
        }
        collections={collections}
        sidebarContent={<SidebarContent content={page?.sidebar} />}
      />
    </>
  );
}
