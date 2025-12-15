import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import type {
  MenuQuery,
  MenuQueryVariables,
} from '../common/headlessService/menu';
import { MenuDocument } from '../common/headlessService/menu';

type Variables = {
  menuName: string;
};

export default async function getMenuStaticProps(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { menuName }: Variables,
) {
  return apolloClient.query<MenuQuery, MenuQueryVariables>({
    query: MenuDocument,
    variables: {
      id: menuName,
    },
  });
}
