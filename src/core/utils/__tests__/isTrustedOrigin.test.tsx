import isTrustedOrigin from '../isTrustedOrigin';

const trustedOrigins = ['https://www.youtube.com', 'https://player.vimeo.com'];

describe('isTrustedOrigin', () => {
  it.each([
    'https://www.youtube.com/embed/abc',
    'https://player.vimeo.com/video/1?h=2',
    'https://www.youtube.com',
  ])('trusts %s', (url) => {
    expect(isTrustedOrigin(url, trustedOrigins)).toBe(true);
  });

  it.each([
    'https://evil.example.com/embed/abc',
    'http://www.youtube.com/embed/abc', // scheme is part of the origin
    'https://www.youtube.com.evil.example.com/abc',
  ])('does not trust %s', (url) => {
    expect(isTrustedOrigin(url, trustedOrigins)).toBe(false);
  });

  // These used to throw a TypeError and crash the whole render. An origin we
  // cannot resolve can never be on the allowlist, so it must fail closed.
  it.each<[string, string | undefined]>([
    ['a missing src', undefined],
    ['an empty src', ''],
    ['a relative src', '/embeds/video'],
    ['a protocol-relative src', '//www.youtube.com/embed/abc'],
    ['a garbage src', 'not a url'],
    ['a javascript: uri', 'javascript:alert(1)'],
  ])('fails closed for %s', (_name, url) => {
    expect(() => isTrustedOrigin(url, trustedOrigins)).not.toThrow();
    expect(isTrustedOrigin(url, trustedOrigins)).toBe(false);
  });

  it('trusts nothing when the allowlist is empty', () => {
    expect(isTrustedOrigin('https://www.youtube.com/embed/abc', [])).toBe(
      false,
    );
  });
});
