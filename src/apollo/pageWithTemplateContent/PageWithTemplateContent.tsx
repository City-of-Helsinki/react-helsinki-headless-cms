import React from 'react';
import { LoadingSpinner } from 'hds-react';

import { usePageByTemplateQuery } from '../../common/headlessService/pageByTemplate';
import {
  PageContent as PageContentWithoutData,
  PageContentProps as PageContentPropsWithoutData,
} from '../../core/pageContent/PageContent';
import styles from './pageWithTemplateContent.module.scss';
import useApolloPageContext from '../page/useApolloPageContext';
import { LanguageCodeEnum } from '../../core';

export type PageProps = Omit<PageContentPropsWithoutData, 'page'> & {
  language: LanguageCodeEnum;
  notFoundPageContent?: JSX.Element;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

export function PageWithTemplateContent({
  language,
  notFoundPageContent = (
    <div>
      404 - Page not found. Provide the notFoundPageContent prop to PageContent
      to replace this message.
    </div>
  ),
  ...delegatedProps
}: PageProps) {
  const { template } = useApolloPageContext();
  const pageByTemplateQuery = usePageByTemplateQuery({
    variables: {
      template,
      language,
    },
  });

  if (pageByTemplateQuery.loading) {
    return (
      <div className={styles.loadingSpinnerContainer}>
        <LoadingSpinner multicolor />
      </div>
    );
  }

  const pageNotFound = pageByTemplateQuery?.data?.pageByTemplate === null;

  if (pageNotFound) {
    return notFoundPageContent;
  }

  return (
    <PageContentWithoutData
      {...delegatedProps}
      page={pageByTemplateQuery?.data?.pageByTemplate}
    />
  );
}
