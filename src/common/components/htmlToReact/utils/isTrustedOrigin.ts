export default function isTrustedOrigin(
  testedOrigin: string,
  trustedOrigins: string[],
) {
  return trustedOrigins.includes(new URL(testedOrigin).origin);
}
