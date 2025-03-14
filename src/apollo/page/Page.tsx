import React from 'react';

import { TemplateEnum } from '../../core';
import type { PageProps as PagePropsWithoutData } from '../../core/page/Page';
import { Page as PageWithoutData } from '../../core/page/Page';
import ApolloPageContextProvider from './ApolloPageContextProvider';

export type PageProps = PagePropsWithoutData & {
  /**
   * Uri of the page.
   */
  uri?: string;
  /**
   * Page template value.
   */
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
