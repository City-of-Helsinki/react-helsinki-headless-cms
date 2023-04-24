export default function validateTrustedOriginsFormat(
  trustedOrigins?: string[],
) {
  // The URL constructor should throw a TypeError when the URL is not a valid URL:
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL#exceptions.
  // However, there are some cases, like `new URL("test://not-a-valid-url").origin`,
  // when the TypeError is not thrown, but the origin is set to 'null'.
  if (trustedOrigins?.some((origin) => new URL(origin).origin === 'null')) {
    throw new Error(
      `Not valid URLs in trustedOrigins: [${trustedOrigins.join(', ')}]`,
    );
  }
}
