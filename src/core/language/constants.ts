import { LanguageCodeEnum } from '../../common/headlessService/types';

/** Default order for sorting languages. */
export const LANGUAGE_CODE_ORDINAL_NUMBER = {
  [LanguageCodeEnum.Fi]: 1, // 1st
  [LanguageCodeEnum.Sv]: 2, // 2nd
  [LanguageCodeEnum.En]: 3, // 3rd
} as const satisfies Record<LanguageCodeEnum, number>;
