/**
 * @param arr - any array.
 * @param len - the array length.
 * @return chunks array of initial array (grouped elements).
 */
export function splitArrayIntoChunksOfLen(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arr: Array<React.ReactElement<any>>,
  len: number,
) {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

/**
 * @param index - item set index.
 * @param itemSetId - item set (element of the array).
 * @return an unique key based on input data.
 */
export const getItemSetKey = (index: number, itemSetId?: string) =>
  `itemSet-${itemSetId ?? Math.random()}-${index}`;

/**
 * Create an unique key for item set.
 * @param index - item index.
 * @param itemId - item (element of the array). Default 'itemSet-item'
 * @param itemSetPrefix - item prefix (element of the array).
 * @return an unique key based on input data.
 */
export const getItemSetItemKey = (
  index: number,
  itemId?: string,
  itemSetPrefix = 'itemSet-item',
) => `${itemSetPrefix}-${itemId ?? Math.random()}-${index}`;

/**
 * @param item - item (element of the array).
 * @param index - item index.
 * @return an unique key for the dot (slide counter) based on input data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSlideDotKey = (item: any, index: number) =>
  `slide-dot-${item?.id ?? Math.random()}-${index}`;

export const getLoadMoreKey = () => `carousel-loadmore-${Math.random()}`;
