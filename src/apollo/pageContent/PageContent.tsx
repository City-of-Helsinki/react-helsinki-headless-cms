import React from 'react';
import { LoadingSpinner } from 'hds-react';

import { usePageQuery } from '../../common/headlessService/page';
import { PageContent as PageContentWithoutData } from '../../core/pageContent/PageContent';
import type { PageContentProps as PageContentPropsWithoutData } from '../../core/pageContent/types';
import styles from './pageContent.module.scss';
import useApolloPageContext from '../page/useApolloPageContext';
import { MAIN_CONTENT_ID } from '../../common/constants';

export type PageProps = Omit<PageContentPropsWithoutData, 'page'> & {
  /**
   * Page content if data not found or missing from cms.
   */
  notFoundPageContent?: JSX.Element;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

export function PageContent({
  notFoundPageContent = (
    <div>
      404 - Page not found. Provide the notFoundPageContent prop to PageContent
      to replace this message.
    </div>
  ),
  ...delegatedProps
}: PageProps) {
  const { uri } = useApolloPageContext();
  const pageQuery = usePageQuery({
    variables: {
      id: uri,
    },
  });

  if (pageQuery.loading) {
    return (
      <div id={MAIN_CONTENT_ID} className={styles.loadingSpinnerContainer}>
        <LoadingSpinner multicolor />
      </div>
    );
  }

  const pageNotFound = pageQuery?.data?.page === null;

  if (pageNotFound) {
    return notFoundPageContent;
  }

  return (
    <PageContentWithoutData {...delegatedProps} page={pageQuery?.data?.page} />
  );
}
