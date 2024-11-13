export default function getIsValidHttpUrl(possibleUrl: string) {
  try {
    const url = new URL(possibleUrl);

    return url.protocol === 'http:' || url.protocol === 'https:';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false;
  }
}
