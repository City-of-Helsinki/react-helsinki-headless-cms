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

By importing data dependent components from `react-helsinki-headless-cms/apollo`, this library will request the data for you.

**Note:** An Apollo client linked to a graphql endpoint with a supported schema (headless CMS) must be provided in the `apolloClient` field of the `config` object.

**Simplified example**

```tsx
import { Page } from 'react-helsinki-headless-cms/apollo';
import { Navigation } from 'react-helsinki-headless-cms/apollo';

<ConfigProvider
  config={{
    // ...
    apolloClient: client, // A client for the CMS
    eventsApolloClient: client, // A client to connect a events datasource (the LinkedEvents)
    venuesApolloClient: 'disabled', // A client to connect a venue datasource (the Servicemap / "TPREK")
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

**NOTE: The library is for general use and should not be developed for a single application environment only!** Check [the known clients](#the-known-clients-that-are-using-this-library)

| Name                  | Purpose                                                                                                                    | Useful Options                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `yarn dev`            | Starts storybook environment that can be used for developing components.                                                   |                               |
| `yarn lint`           | Lints the application to be according to quality standards (eslint) and formatting standards (prettier).                   | `--fix`: fix fixable problems |
| `yarn test`           | Runs tests with jest.                                                                                                      | `--watch`: enable watch mode  |
| `yarn build`          | Builds application with rollup.                                                                                            |                               |
| `yarn publish-canary` | Publishes a canary tagged version of the application. CD is configured to run this script on additions to the main branch. |                               |
| `yarn publish-stable` | Publishes a stable tagged version of the application. CD is configured to run this script on additions to the main branch. |                               |

**NOTE: To manually publish a new version to the NPM, you will need the credentials that can be found from the City of Helsinki Culture and Leisure's Vault-service.**

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

Storybook is a frontend workshop for building UI components and pages in isolation https://storybook.js.org/. The Storybook can be used to develop and to test the components, but also to document the components and their features.

The `yarn dev` command will start `storybook` in port `6006`. When you make changes in `src`, they'll be automatically updated to `storybook`.

### Use as a application dependency

The easiest way to test the React Helsinki Headless CMS -library is to install it as a dependency of an application by using a local relative path: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#local-paths.

The steps to use the local relative path as a dependency:

1. Build the React Helsinki Headless CMS -library with `yarn build`. You should now have a `/dist` -folder that contains the built library package.
2. Add the `/dist`-directory as a dependency. Remember to use the right relative local path:

```
{
  "dependencies": {
    "react-helsinki-headless-cms": "file:../react-helsinki-headless-cms/dist"
  }
}
```

**NOTE: After any changes done to the React Helsinki Headless CMS -library, remember to build again!**

### Build

This project uses `rollup` for its final bundle.

**NOTE: Check the [known issues](#known-issues)!!**

### Releasing new versions

A new version of the `npm` package is automatically released when a new release is created in GitHub. Additionally, a new canary release is created after each new push into master.

### Known issues

- Jest has difficulties loading this library. When this library is required in a test file, it's possible that some imports are cjs and some are esm. These two variants do not share a react context which can result in `useConfig` calls that return an empty config object even though `<ConfigProvider>` is declared correctly. I.e. `<ConfigProvider>` sets values for `context1` and `useConfig` reads `context2`.
- `yarn generate:graphql` does not work with Node.js v16 or greater
- Some of the built packages created with `yarn build` does some issues with some types. This leads to a situation where the application that uses the library cannot read all the exported types. Especially the exported enums inside a built package might be handled incorrectly (https://github.com/rollup/rollup/issues/4291), but there are other type related issues also, but not on every built package.

### The known clients that are using this library

- The city of Helsinki Events: https://tapahtumat.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Hobbies: https://harrastukset.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Sports: https://liikunta.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Kultus: https://kultus.fi | https://github.com/City-of-Helsinki/palvelutarjotin-ui
- The city of Helsinki Culture Kids: https://kummilapset.hel.fi/ | https://github.com/City-of-Helsinki/kukkuu-ui
