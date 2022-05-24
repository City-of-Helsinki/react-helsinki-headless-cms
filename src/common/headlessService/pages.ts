import makeQueryWithApolloClientFromConfig from "./makeQueryWithApolloClientFromConfig";
import {
  usePagesQuery as usePagesQueryWithoutClient,
  PagesQuery,
  PagesQueryVariables,
} from "./__generated__";

export const usePagesQuery = makeQueryWithApolloClientFromConfig<
  PagesQuery,
  PagesQueryVariables
>(usePagesQueryWithoutClient);

export {
  PagesQuery,
  PagesQueryVariables,
  PagesDocument,
} from "./__generated__";
