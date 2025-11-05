import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import type { CategoryQuery, CategoryQueryVariables } from './__generated__';
import { useCategoryQuery as useCategoryQueryWithoutClient } from './__generated__';

export const useCategoryQuery = makeQueryWithApolloClientFromConfig<
  CategoryQuery,
  CategoryQueryVariables
>(useCategoryQueryWithoutClient);

export {
  type CategoryQuery,
  type CategoryQueryVariables,
  CategoryDocument,
} from './__generated__';
