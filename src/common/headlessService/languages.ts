import makeQueryWithApolloClientFromConfig from "./makeQueryWithApolloClientFromConfig";
import {
  useLanguagesQuery as useLanguagesQueryWithoutClient,
  LanguagesQuery,
  LanguagesQueryVariables,
} from "./__generated__";

export const useLanguagesQuery = makeQueryWithApolloClientFromConfig<
  LanguagesQuery,
  LanguagesQueryVariables
>(useLanguagesQueryWithoutClient);

export {
  LanguagesQuery,
  LanguagesQueryVariables,
  LanguagesDocument,
} from "./__generated__";
