// eslint-disable-next-line import/no-extraneous-dependencies
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import type {
  LanguagesQuery,
  LanguagesQueryVariables,
} from '../common/headlessService/languages';
import { LanguagesDocument } from '../common/headlessService/languages';

export default async function getLanguageStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
) {
  return apolloClient.query<LanguagesQuery, LanguagesQueryVariables>({
    query: LanguagesDocument,
  });
}
