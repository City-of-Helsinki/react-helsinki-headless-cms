import makeQueryWithApolloClientFromConfig from './makeQueryWithApolloClientFromConfig';
import {
  usePageByTemplateQuery as usePageByTemplateQueryWithoutClient,
  PageByTemplateQuery,
  PageByTemplateQueryVariables,
} from './__generated__';

export const usePageQuery = makeQueryWithApolloClientFromConfig<
  PageByTemplateQuery,
  PageByTemplateQueryVariables
>(usePageByTemplateQueryWithoutClient);

export {
  PageByTemplateQuery,
  PageByTemplateQueryVariables,
  PageByTemplateDocument,
} from './__generated__';
