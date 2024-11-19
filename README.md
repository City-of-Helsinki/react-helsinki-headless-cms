# React Helsinki Headless CMS

## Introduction

React Helsinki Headless CMS - is a highly customized component library based on [HDS](https://github.com/City-of-Helsinki/helsinki-design-system). It is designed for Helsinki City Web applications which are using preconfigured Wordpress Headless CMS environments (compatible with the library). This library is a set of unified visual components for Pages, Artciles, Artcicle Archives which provide:

1. Unified designs for pages, layouts, and custom components across multiple applications.
2. Ability to pass app-specific configurations, such as translations and themes.
3. A set of components for visually presenting data from WordPress content modules and features.
4. A set of utilities, type and constants required for components implementation.
5. Support for required Apollo providers, such as linked events and venue search.

**Note:** This library does not inject the Helsinki Grotesk font for you--you must add it yourself.

**Note:** This library uses HDS design tokens through the SCSS interface so that mitch matching design token versions does not lead to unexpected results.

### The known clients that are using this library

- The city of Helsinki Events: https://tapahtumat.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Hobbies: https://harrastukset.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Sports: https://liikunta.hel.fi | https://github.com/City-of-Helsinki/events-helsinki-monorepo
- The city of Helsinki Kultus: https://kultus.fi | https://github.com/City-of-Helsinki/palvelutarjotin-ui
- The city of Helsinki Culture Kids: https://kummilapset.hel.fi/ | https://github.com/City-of-Helsinki/kukkuu-ui

## Installation

```bash
yarn add react-helsinki-headless-cms
```

## Development

**NOTE: The library is for general use and should not be developed for a single application environment only!** Check [the known clients](#the-known-clients-that-are-using-this-library)

### When to develop

The general requirements for new Component development:

1. The new Component must be connected to an instance of the WordPress Headless CMS.
2. The Wordpress Headless CMS environment has new Component compatible architecture, features and data structure (component library is heavily dependent on the GraphQL schemas).
3. The new Component is not presented in [HDS](https://github.com/City-of-Helsinki/helsinki-design-system) or HDS cannot fully fulfill the specifications.
4. The new Component exists in HDS backlog, however, still it is not released by HDS team. In that case, HCRC new Component can be implemented and later must be replaced with HDS component when one is available.
5. New Component can be reused accross multiple applications.

### Available scripts


| Name                    | Purpose                                                                                                                    | Useful Options                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `yarn dev`              | Starts storybook environment that can be used for developing components.                                                   |                               |
| `yarn typecheck`        | Runs the ts type check in the project components.                                                                          |                               |
| `yarn lint`             | Lints the application to be according to quality standards (eslint) and formatting standards (prettier).                   | `--fix`: fix fixable problems |
| `yarn test`             | Runs tests with jest.                                                                                                      | `--watch`: enable watch mode  |
| `yarn test-storybook`   | Runs storybook accessibility tests jest.                                                                                   |                               |
| `yarn build`            | Builds application with rollup.                                                                                            |                               |
| `yarn docker:dev`       | Runs the application with docker with Development target environment.                                                      |                               |
| `yarn docker:prod`      | Runs the application with docker with Production target environment.                                                       |                               |
| `yarn docker:down`      | Shuts down the docker environment.                                                                                         |                               |
| `yarn publish-canary`   | Publishes a canary tagged version of the application. CD is configured to run this script on additions to the main branch. |                               |
| `yarn publish-stable`   | Publishes a stable tagged version of the application. CD is configured to run this script on additions to the main branch. |                               |
| `yarn generate:graphql` | Generates / updates GraphQL schema for the project.                                                                        |                               |

**NOTE: To manually publish a new version to the NPM, you will need the credentials that can be found from the City of Helsinki Culture and Leisure's Vault-service.**


### Development environments

You can use docker local environment for development:

`docker compose up --build` when using Docker

`podman compose up --build` when using Podman

Alternatevly, the local environment can be used:

`yarn dev`

### Module structure

This library consists of three modules.

- Core module that includes data naive components.
- Apollo module that wraps core module components with logic that is able to fetch data with the help of an `ApolloClient` instance.
- Nextjs module that provides utilities when working with `Nextjs` and `Apollo`.

### CI

Checks

- Tests pass
- Lint pass
- Build completes
- Type check pass

### CD

On additions to main, a canary version gets published to npm.

On a new release, a new version is released to npm.

### Storybook

Storybook is a frontend workshop for building UI components and pages in isolation https://storybook.js.org/. The Storybook can be used to develop and to test the components, but also to document the components and their features.

The project is using the Storybook 8.

**NOTE: Storybook version 8 may require the `playwright-chromium` installation.**

The `yarn dev` command will start `storybook` in port `6006`. When you make changes in `src`, they'll be automatically updated to `storybook`.

### Apollo

This can handle data queries for you if you are using a supported library to fetch your data.

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

## Testing

With new features introduced in Storybook version 7, this library is configured with `@storybook/addon-a11y` Axe Accessibility Plugin.

The test could be run from the Storybook UI (Accessibility tab of the Story) or using the script.

### Testing in IDE terminal

```bash
yarn test-storybook
```

After executing the script, you will get the Axe Accessibility testing report in the terminal window.
The number of tests are dynamic per component and decided by Axe plugin logic.

## Usage

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

## Publishing new versions

There are 2 scripts for publishing of new verions of npm pagage:

To publish a stable version use

```bash
yarn publish-stable
```

To publish a canary version use

```bash
yarn publish-canary
```

**Note:** There is an a known issue with publishing using Windows environment. If you have a Windows machine use Docker container to publish the package.An Apollo client linked to a graphql endpoint with a supported schema (headless CMS) must be provided in the `apolloClient` field of the `config` object.

## Known issues

- Jest has difficulties loading this library. When this library is required in a test file, it's possible that some imports are cjs and some are esm. These two variants do not share a react context which can result in `useConfig` calls that return an empty config object even though `<ConfigProvider>` is declared correctly. I.e. `<ConfigProvider>` sets values for `context1` and `useConfig` reads `context2`.
- `yarn generate:graphql` does not work with Node.js v16 or greater
- Some of the built packages created with `yarn build` does some issues with some types. This leads to a situation where the application that uses the library cannot read all the exported types. Especially the exported enums inside a built package might be handled incorrectly (https://github.com/rollup/rollup/issues/4291), but there are other type related issues also, but not on every built package.
