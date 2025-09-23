/** Cloned from the events-proxy https://github.com/City-of-Helsinki/events-helsinki-api-proxy/tree/master/src/utils */
/**
 * Normalize flat language attributes to a localized object
 * Before:
 * {
 *    titleEn: "title en",
 *    titleFi: "title fi",
 *    titleSv: "title sv"
 * }
 * After
 * {
 *    title: {
 *      en: "title en"
 *      fi: "title fi",
 *      sv: "title sv"
 *    }
 * }
 */
const normalizeLocalizedObject = <T>(data: T, key: string): T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalizedData: Record<string, any> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(data as Record<string, any>),
  };
  normalizedData[key] = {
    en: normalizedData[`${key}En`] as string,
    fi: normalizedData[`${key}Fi`] as string,
    sv: normalizedData[`${key}Sv`] as string,
  };
  delete normalizedData[`${key}En`];
  delete normalizedData[`${key}Fi`];
  delete normalizedData[`${key}Sv`];

  return normalizedData as T;
};

export default normalizeLocalizedObject;
