// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import {
  PageQuery,
  PageQueryVariables,
  PageDocument,
} from "../common/headlessService/page";
import { LanguageCodeEnum } from "../common/headlessService/types";

type Variables = {
  uri: string;
  currentLanguage: LanguageCodeEnum;
};

export default async function getPageStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { uri, currentLanguage }: Variables
) {
  return apolloClient.query<PageQuery, PageQueryVariables>({
    query: PageDocument,
    variables: {
      id: uri,
      language: currentLanguage,
    },
  });
}
