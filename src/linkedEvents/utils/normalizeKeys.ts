/**
 * Cloned from the events-proxy https://github.com/City-of-Helsinki/events-helsinki-api-proxy/tree/master/src/utils
 */
// NOTE: The normalizeKey import is assumed to return a string for a string input.
import normalizeKey from './normalizeKey';

/**
 * Normalizes an object or array of objects by converting keys from snake_case to camelCase.
 * This function handles nested objects and arrays recursively.
 *
 * Example:
 * Before:
 * {
 *   @id: "123",
 *   event_type: "foo",
 *   event_price: {
 *     is_free: false
 *   }
 * }
 * After:
 * {
 *   internalId: "123",
 *   eventType: "foo",
 *   eventPrice: {
 *     isFree: false
 *   }
 * }
 *
 * @template T - The type of the input value.
 * @param {T} value - The object, array, or primitive to normalize.
 * @returns {T} - A new object or array with normalized keys, or the original value if it's a primitive.
 */
function normalizeKeys<T>(value: T): T {
  // If the value is an array, map over it and recursively call normalizeKeys for each item.
  if (Array.isArray(value)) {
    return value.map(normalizeKeys) as T;
  }

  // If the value is an object (and not null), recursively call normalizeKeys for its values.
  if (value && typeof value === 'object' && value.constructor === Object) {
    // We use a type assertion here to build the new object.
    const obj: Record<string, unknown> = {};
    const keys = Object.keys(value as Record<string, unknown>);
    const len = keys.length;

    for (let i = 0; i < len; i += 1) {
      const currentKey = keys[i];
      const normalizedKey = normalizeKey(currentKey);
      // Recursively normalize the value associated with the current key
      obj[normalizedKey] = normalizeKeys(
        (value as Record<string, unknown>)[currentKey],
      );
    }

    return obj as T;
  }

  // If the value is a primitive (string, number, boolean, null, etc.), return it directly.
  return value;
}

export default normalizeKeys;
