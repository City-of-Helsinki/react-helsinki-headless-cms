// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  LanguagesQuery,
  LanguagesQueryVariables,
  LanguagesDocument,
} from '../common/headlessService/languages';

export default async function getLanguageStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
) {
  return apolloClient.query<LanguagesQuery, LanguagesQueryVariables>({
    query: LanguagesDocument,
  });
}
