/**
 * @param {arr} arr - any array.
 * @param {len} len - the array length.
 * @return {Array} - Returns the chunks array of initial array (grouped elements).
 */
export function splitArrayIntoChunksOfLen(arr, len) {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

/**
 * @param {item} item - item set (element of the array).
 * @param {index} index - item set index.
 * @return {string} - Returns the unique key based on input data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getItemSetKey = (item: any, index: number) =>
  `itemSet-${item.id ?? Math.random()}-${index}`;

/**
 * @param {item} item - item (element of the array).
 * @param {itemSetPrefix} itemSetPrefix - item prefix (element of the array).
 * @param {index} index - item index.
 * @return {string} - Returns the unique key based on input data.
 */
export const getItemSetItemKey = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemSetPrefix: any,
  index: number,
) => `itemSet-item-${item.id ?? Math.random()}-${index}`;

/**
 * @param {item} item - item (element of the array).
 * @param {index} index - item index.
 * @return {string} - Returns the unique key for the dot (slide counter) based on input data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSlideDotKey = (item: any, index: number) =>
  `slide-dot-${item?.id ?? Math.random()}-${index}`;

export const getLoadMoreKey = () => `carousel-loadmore-${Math.random()}`;
