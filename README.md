# React Helsinki Headless CMS

Demo:

## Quick Start

**Note:** This library does not inject the Helsinki Grotesk font for you--you must add it yourself.

**Note:** This library uses HDS design tokens through the SCSS interface so that mitch matching design token versions does not lead to unexpected results.

### 1. Install

```bash
yarn add react-helsinki-headless-cms
```

### 2. Import

`App.tsx`

```tsx
// ...
import {
  Page,
  PageContent,
  ConfigProvider,
  defaultConfig,
} from "react-helsinki-headless-cms";

function App() {
  const page = ...;

  return (
    <ConfigProvider config={defaultConfig}>
      <Page
        navigation={
          <Navigation
            languages={...}
            menu={...}
            onTitleClick={() => ...}
            getUrlForLanguage={(language, currentLanguage) => new URL(...)
            }
          />
        }
        content={<PageContent page={page} breadcrumbs={[...]} />}
        footer={...}
      />
    </ConfigProvider>
  );
}
```

## Use provided queries

This can handle data queries for you if you are using a supported library to fetch your data.

### Apollo

By importing data dependent components from `react-helsinki-headless-cms/apollo`, this library will request the data fo you.

**Note:** An Apollo client linked to a graphql endpoint with a supported schema (headless CMS) must be provided in the `apolloClient` field of the `config` object.

**Simplified example**

```tsx
import { Page } from 'react-helsinki-headless-cms/apollo';
import { Navigation } from 'react-helsinki-headless-cms/apollo';

<ConfigProvider
  config={{
    // ...
    apolloClient: client,
    // ...
  }}
>
  <Page
    uri="/en/url"
    navigation={<Navigation menuName="Name of menu in headless CMS" />}
  />
</ConfigProvider>;
```

### NextJS

We provide utilities for fetching headless data for NextJs in `react-helsinki-headless-cms/nextjs`. These can be used when generating static pages.

## For Developers of Library

| Name                  | Purpose                                                                                                                    | Useful Options                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `yarn dev`            | Starts storybook environment that can be used for developing components.                                                   |                               |
| `yarn lint`           | Lints the application to be according to quality standards (eslint) and formatting standards (prettier).                   | `--fix`: fix fixable problems |
| `yarn test`           | Runs tests with jest.                                                                                                      | `--watch`: enable watch mode  |
| `yarn build`          | Builds application with rollup.                                                                                            |                               |
| `yarn publish-canary` | Publishes a canary tagged version of the application. CD is configured to run this script on additions tot he main branch. |                               |

### Module structure

This library consists of three modules.

- Core module that includes data naive components.
- Apollo module that wraps core module components with logic that is able to fetch data with the help of an `ApolloClient` instance.
- Nextjs module that provides utilities when working with Nextjs and Apollo.

### CI

Checks

- Tests pass
- Lint pass
- Build completes

### CD

On additions to main, a canary version gets published to npm.

On a new release, a new version is released to npm.

### Storybook

The `yarn dev` command will start `storybook` in port `6006`. When you make changes in `src`, they'll be automatically updated to `storybook`.

### Build

This project uses `rollup` for its final bundle.

### Releasing new versions

A new version of the `npm` package is automatically released when a new release is created in GitHub. Additionally, a new canary release is created after each new push into master.

### Known issues

- Jest has difficulties loading this library. When this library is required in a test file, it's possible that some imports are cjs and some are esm. These two variants do not share a react context which can result in `useConfig` calls that return an empty config object even though `<ConfigProvider>` is declared correctly. I.e. `<ConfigProvider>` sets values for `context1` and `useConfig` reads `context2`.
- `yarn generate:graphql` does not work with Node.js v16 or greater
