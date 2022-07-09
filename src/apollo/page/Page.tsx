import React from 'react';

import { TemplateEnum } from '../../core';
import {
  Page as PageWithoutData,
  PageProps as PagePropsWithoutData,
} from '../../core/page/Page';
import ApolloPageContextProvider from './ApolloPageContextProvider';

export type PageProps = PagePropsWithoutData & {
  uri?: string;
  pageTemplate?: TemplateEnum;
};

export function Page({
  uri = '',
  pageTemplate = TemplateEnum.FrontPage,
  ...delegatedProps
}: PageProps) {
  const pageContextValue = React.useMemo(
    () => ({
      uri,
      pageTemplate,
    }),
    [uri, pageTemplate],
  );

  return (
    <ApolloPageContextProvider value={pageContextValue}>
      <PageWithoutData {...delegatedProps} />
    </ApolloPageContextProvider>
  );
}
