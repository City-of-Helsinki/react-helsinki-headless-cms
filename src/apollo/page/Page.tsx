import React from "react";

import PageWithoutData, {
  PageProps as PagePropsWithoutData,
} from "../../page/Page";
import ApolloPageContextProvider from "./ApolloPageContextProvider";

export type PageProps = PagePropsWithoutData & {
  uri: string;
};

export default function PageContent({ uri, ...delegatedProps }: PageProps) {
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
