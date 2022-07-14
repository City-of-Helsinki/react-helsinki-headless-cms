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
export default <T>(data: T, key: string): T => {
  const normalizedData = { ...data };
  normalizedData[key] = {
    en: normalizedData[`${key}En`],
    fi: normalizedData[`${key}Fi`],
    sv: normalizedData[`${key}Sv`],
  };
  delete normalizedData[`${key}En`];
  delete normalizedData[`${key}Fi`];
  delete normalizedData[`${key}Sv`];

  return normalizedData;
};
