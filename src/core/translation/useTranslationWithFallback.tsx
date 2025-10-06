import { useConfig } from '../configProvider/useConfig';
import type { FallbackTranslationKey } from './types';
import { getTranslationWithFallback } from './getTranslationWithFallback';

export function useTranslationWithFallback() {
  const config = useConfig();
  const { currentLanguageCode } = config;
  const t = (field: FallbackTranslationKey) =>
    getTranslationWithFallback(config, field, currentLanguageCode);
  return { t };
}
