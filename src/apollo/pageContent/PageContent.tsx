import React from 'react';
import { LoadingSpinner } from 'hds-react';

import { usePageQuery } from '../../common/headlessService/page';
import {
  PageContent as PageContentWithoutData,
  PageContentProps as PageContentPropsWithoutData,
} from '../../core/pageContent/PageContent';
import styles from './pageContent.module.scss';
import useApolloPageContext from '../page/useApolloPageContext';

export type PageProps = Omit<PageContentPropsWithoutData, 'page'> & {
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
      <div className={styles.loadingSpinnerContainer}>
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
