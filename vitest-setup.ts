import '@testing-library/jest-dom/vitest';
import * as matchers from 'vitest-axe/matchers';
import { expect, vi } from 'vitest';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

expect.extend(matchers);

vi.stubGlobal('fetch', vi.fn());
// jsdom exposes Image on window but doesn't alias it to the Node global scope
global.Image = window.Image;

import { hideConsoleMessages } from './src/tests/hideConsoleMessages';

hideConsoleMessages({
  warn: [
    // Apollo deprecation message is spammed in tests, just for future info. It's not useful in unit tests.
    /`canonizeResults` is deprecated and will be removed in Apollo Client 4.0. Please remove this option./,
  ],
  error: [
    // CSS stylesheets are not ever parsed by JSDOM, so the message is useless.
    /Could not parse CSS stylesheet/,
  ],
});

loadDevMessages();
loadErrorMessages();
