import React from "react";

import { usePageQuery } from "../../common/headlessService/page";
import PageContentWithoutData, {
  PageContentProps as PageContentPropsWithoutData,
} from "../../pageContent/PageContent";
import useConfig from "../../configProvider/useConfig";

export type PageProps = Omit<PageContentPropsWithoutData, "page"> & {
  uri: string;
};

export default function PageContent({ uri, ...delegatedProps }: PageProps) {
  const { currentLanguageCode } = useConfig();
  const pageQuery = usePageQuery({
    variables: {
      id: uri,
      language: currentLanguageCode,
    },
  });

  return (
    <PageContentWithoutData {...delegatedProps} page={pageQuery?.data?.page} />
  );
}
