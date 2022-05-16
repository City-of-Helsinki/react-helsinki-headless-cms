export function splitArrayIntoChunksOfLen(arr, len) {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getItemSetKey = (item: any, index: number) =>
  `itemSet-${item.id ?? Math.random()}-${index}`;

export const getItemSetItemKey = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemSetPrefix: any,
  index: number
) => `itemSet-item-${item.id ?? Math.random()}-${index}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSlideDotKey = (item: any, index: number) =>
  `slide-dot-${item?.id ?? Math.random()}-${index}`;
