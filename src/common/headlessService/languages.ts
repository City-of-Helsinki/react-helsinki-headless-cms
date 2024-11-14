import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { LanguagesQuery, LanguagesQueryVariables } from './__generated__';
import { useLanguagesQuery as useLanguagesQueryWithoutClient } from './__generated__';

export const useLanguagesQuery = makeQueryWithApolloClientFromConfig<
  LanguagesQuery,
  LanguagesQueryVariables
>(useLanguagesQueryWithoutClient);

export {
  LanguagesQuery,
  LanguagesQueryVariables,
  LanguagesDocument,
  LanguageCodeEnum,
} from './__generated__';
