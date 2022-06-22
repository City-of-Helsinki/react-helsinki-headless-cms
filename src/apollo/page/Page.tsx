import React from "react";

import {
  Page as PageWithoutData,
  PageProps as PagePropsWithoutData,
} from "../../core/page/Page";
import ApolloPageContextProvider from "./ApolloPageContextProvider";

export type PageProps = PagePropsWithoutData & {
  uri: string;
};

export function Page({ uri, ...delegatedProps }: PageProps) {
  const pageContextValue = React.useMemo(
    () => ({
      uri,
    }),
    [uri]
  );

  return (
    <ApolloPageContextProvider value={pageContextValue}>
      <PageWithoutData {...delegatedProps} />
    </ApolloPageContextProvider>
  );
}
