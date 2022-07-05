export default function getIsValidHttpUrl(possibleUrl: string) {
  try {
    const url = new URL(possibleUrl);

    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}
