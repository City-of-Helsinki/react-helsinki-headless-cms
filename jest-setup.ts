// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { toHaveNoViolations } from 'jest-axe';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Extend except with jest-axe
expect.extend(toHaveNoViolations);
