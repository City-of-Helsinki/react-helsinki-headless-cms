import type { Language } from '../../common/headlessService/types';

export type NonEmptyLanguage = Language & {
  code: NonNullable<Language['code']>;
  name: NonNullable<Language['code']>;
};
