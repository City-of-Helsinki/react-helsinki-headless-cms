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
  },

  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  // The test environment that will be used for testing
  // We have react-script as a dependency for our storybook build. This
  // package forces our jsdom version into an older one, regardless of
  // jest being at version 26. To circumvent, we are telling jest to
  // use jsdom sixteen here.
  testEnvironment: 'jest-environment-jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/(build|dist|temp)/'],
  modulePathIgnorePatterns: ['<rootDir>/(build|dist|temp)/'],
};
