// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import {
  MenuQuery,
  MenuQueryVariables,
  MenuDocument,
} from "../common/headlessService/menu";

type Variables = {
  menuName: string;
};

export default async function getMenuStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { menuName }: Variables
) {
  return apolloClient.query<MenuQuery, MenuQueryVariables>({
    query: MenuDocument,
    variables: {
      id: menuName,
    },
  });
}
