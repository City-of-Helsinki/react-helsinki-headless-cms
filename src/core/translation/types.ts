import { LanguageCodeEnum } from '../../common/headlessService/__generated__';
import { FALLBACK_TRANSLATION_KEYS } from './constants';

export type FallbackTranslationKey = (typeof FALLBACK_TRANSLATION_KEYS)[number];
export type FallbackTranslation = Record<LanguageCodeEnum, string>;
export type FallbackTranslations = Record<
  FallbackTranslationKey,
  FallbackTranslation
>;
export type OptionalTranslationsWithFallbacks = {
  [key in FallbackTranslationKey]?: string;
};
