import type { Language } from '../../common/headlessService/types';

export type NonEmptyLanguage = Language &
  Required<Pick<Language, 'code' | 'name'>>;
