// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import {
  PageQuery,
  PageQueryVariables,
  PageDocument,
} from "../common/headlessService/page";

type Variables = {
  uri: string;
};

export default async function getPageStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { uri }: Variables
) {
  return apolloClient.query<PageQuery, PageQueryVariables>({
    query: PageDocument,
    variables: {
      id: uri,
    },
  });
}
