// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import languages from '../../responses/cms/languages/hobbies-languages.json';
import { LanguagesDocument } from '../../../apollo';

export const queryLanguages = () =>
  graphql.query(LanguagesDocument, (req, res, ctx) => res(ctx.data(languages)));
