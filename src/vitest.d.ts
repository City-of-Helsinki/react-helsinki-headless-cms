/* eslint-disable @typescript-eslint/no-empty-object-type */
// eslint-disable-next-line import-x/no-extraneous-dependencies
import 'vitest';
import type { AxeMatchers } from 'vitest-axe/matchers';

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
