import React from "react";

import { LanguageCodeEnum } from "../../common/headlessService/types";
import { usePageQuery } from "../../common/headlessService/page";
import PageContentWithoutData, {
  PageContentProps as PageContentPropsWithoutData,
} from "../../pageContent/PageContent";

export type PageProps = Omit<PageContentPropsWithoutData, "page"> & {
  uri: string;
  currentLanguage: LanguageCodeEnum;
};

export default function PageContent({
  uri,
  currentLanguage,
  ...delegatedProps
}: PageProps) {
  const pageQuery = usePageQuery({
    variables: {
      id: uri,
      language: currentLanguage,
    },
  });

  return (
    <PageContentWithoutData {...delegatedProps} page={pageQuery?.data?.page} />
  );
}
