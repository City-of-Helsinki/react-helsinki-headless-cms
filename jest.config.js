// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // return a mock css module
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '^lodash-es$': 'lodash',
    // This forces Jest to use the correct CommonJS version of uuid
    // instead of the ESM one hds-react is trying to import.
    '^uuid$': require.resolve('uuid'),
  },

  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  // Fix the issue "Request/Response/TextEncoder is not defined (Jest)". See more: https://mswjs.io/docs/migrations/1.x-to-2.x#frequent-issues.
  testEnvironment: 'jest-fixed-jsdom',

  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(hds-react|uuid|until-async)/)',
    '\\.pnp\\.[^\\/]+$',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/(build|dist|temp)/'],
  modulePathIgnorePatterns: ['<rootDir>/(build|dist|temp)/'],
};
