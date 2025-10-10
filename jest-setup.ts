// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { toHaveNoViolations } from 'jest-axe';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetchMock from 'jest-fetch-mock';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
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

fetchMock.enableMocks();

// Extend except with jest-axe
expect.extend(toHaveNoViolations);

loadDevMessages();
loadErrorMessages();
