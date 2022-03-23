import React from "react";

import { PageQuery } from "../common/headlessService/page";
import SidebarContent from "./sidebarContent/SidebarContent";
import PageContentLayout from "./PageContentLayout";
import PageMainContent from "./PageMainContent";
import PageContentBreadcrumbs from "./PageContentBreadcrumbs";
import { Breadcrumb } from "./types";

export type PageContentProps = {
  page?: PageQuery["page"];
  breadcrumbs?: Breadcrumb[];
};

export default function PageContent({ page, breadcrumbs }: PageContentProps) {
  return (
    <PageContentLayout
      breadcrumbs={
        breadcrumbs && <PageContentBreadcrumbs breadcrumbs={breadcrumbs} />
      }
      content={
        <PageMainContent
          title={page?.translation?.title}
          content={page?.translation?.content}
          imageSrc={page?.translation?.featuredImage?.node?.mediaItemUrl}
          imageAlt={page?.translation?.featuredImage?.node?.altText}
        />
      }
      sidebarContent={<SidebarContent content={page?.translation?.sidebar} />}
    />
  );
}
