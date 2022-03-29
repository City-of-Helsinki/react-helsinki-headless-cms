import React from "react";

import { usePageQuery } from "../../common/headlessService/page";
import PageContentWithoutData, {
  PageContentProps as PageContentPropsWithoutData,
} from "../../pageContent/PageContent";
import useConfig from "../../configProvider/useConfig";

export type PageProps = Omit<PageContentPropsWithoutData, "page"> & {
  uri: string;
  notFoundPageContent?: JSX.Element;
};

export default function PageContent({
  uri,
  notFoundPageContent = (
    <div>
      404 - Page not found. Provide the notFoundPageContent prop to PageContent
      to replace this message.
    </div>
  ),
  ...delegatedProps
}: PageProps) {
  const { currentLanguageCode } = useConfig();
  const pageQuery = usePageQuery({
    variables: {
      id: uri,
      language: currentLanguageCode,
    },
  });

  const pageNotFound = pageQuery?.data?.page === null;

  if (pageNotFound) {
    return notFoundPageContent;
  }

  return (
    <PageContentWithoutData {...delegatedProps} page={pageQuery?.data?.page} />
  );
}
