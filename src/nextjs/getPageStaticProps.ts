// eslint-disable-next-line import/no-extraneous-dependencies
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import type {
  PageQuery,
  PageQueryVariables,
} from '../common/headlessService/page';
import { PageDocument } from '../common/headlessService/page';

type Variables = {
  uri: string;
};

export default async function getPageStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { uri }: Variables,
) {
  return apolloClient.query<PageQuery, PageQueryVariables>({
    query: PageDocument,
    variables: {
      id: uri,
    },
  });
}
