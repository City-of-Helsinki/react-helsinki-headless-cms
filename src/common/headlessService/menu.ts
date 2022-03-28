import makeQueryWithApolloClientFromConfig from "./makeQueryWithApolloClientFromConfig";
import {
  useMenuQuery as useMenuQueryWithoutClient,
  MenuQuery,
  MenuQueryVariables,
} from "./__generated__";

export const useMenuQuery = makeQueryWithApolloClientFromConfig<
  MenuQuery,
  MenuQueryVariables
>(useMenuQueryWithoutClient);

export { MenuQuery, MenuQueryVariables, MenuDocument } from "./__generated__";
