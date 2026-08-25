export default function isTrustedOrigin(
  testedOrigin: string | undefined,
  trustedOrigins: string[],
) {
  // The value comes from CMS content, so it may be missing, relative or plain
  // malformed. new URL() throws on all of those, which used to crash the whole
  // render. A value we cannot resolve to an absolute origin can never match the
  // allowlist, so fail closed instead.
  try {
    return trustedOrigins.includes(new URL(testedOrigin as string).origin);
  } catch {
    return false;
  }
}
