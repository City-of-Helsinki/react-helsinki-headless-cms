import React from "react";

import SidebarContent from "./sidebarContent/SidebarContent";
import PageContentLayout from "./PageContentLayout";
import PageMainContent from "./PageMainContent";
import PageContentBreadcrumbs from "./PageContentBreadcrumbs";
import { Page as PageType, Breadcrumb } from "./types";

type PageProps = {
  page: PageType;
  breadcrumbs?: Breadcrumb[];
};

export default function PageContent({ page, breadcrumbs }: PageProps) {
  return (
    <PageContentLayout
      breadcrumbs={
        breadcrumbs && <PageContentBreadcrumbs breadcrumbs={breadcrumbs} />
      }
      content={
        <PageMainContent
          title={page.title}
          content={page.content}
          imageSrc={page.featuredImage?.node?.mediaItemUrl}
          imageAlt={page.featuredImage?.node?.altText}
        />
      }
      sidebarContent={<SidebarContent content={page.sidebar} />}
    />
  );
}
