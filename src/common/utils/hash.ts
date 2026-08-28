/* eslint-disable no-bitwise */

// https://stackoverflow.com/a/52171480
//
// Hashes UTF-16 code units via charCodeAt, matching the upstream cyrb53
// implementation. Do not switch to codePointAt (sonar typescript:S7758):
// the result is persisted as a localStorage key for notification dismissals
// (see Notification.tsx), so changing the character mapping would reset that
// state. Code-point iteration confers no benefit for a hash, and swapping the
// call without also changing the code-unit loop would double-count surrogates.
export default function hash(str: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;

  for (let i = 0, ch: number; i < str.length; i += 1) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
