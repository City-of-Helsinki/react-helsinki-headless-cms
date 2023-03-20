// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from 'util';

// eslint-disable-next-line import/no-extraneous-dependencies
import { toHaveNoViolations } from 'jest-axe';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Extend except with jest-axe
expect.extend(toHaveNoViolations);

// Add for isomorphic-dompurify
// https://github.com/kkomelin/isomorphic-dompurify/issues/91#issuecomment-1012645198
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
