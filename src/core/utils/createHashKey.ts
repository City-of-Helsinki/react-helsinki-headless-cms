const MAX_KEY_LENGTH = 200;
export default function createHashKey(source: string | object) {
  const data = typeof source === 'string' ? source : JSON.stringify(source);
  return btoa(unescape(encodeURIComponent(data))).substring(0, MAX_KEY_LENGTH);
}
