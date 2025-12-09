# React Helsinki Headless CMS

React UI component library to visualize [Headless CMS](https://github.com/City-of-Helsinki/headless-cms)
data using [Helsinki Design System](https://github.com/City-of-Helsinki/helsinki-design-system).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
  - [The known clients that are using this library](#the-known-clients-that-are-using-this-library)
- [Installation](#installation)
- [Development](#development)
  - [When to develop](#when-to-develop)
  - [Available scripts](#available-scripts)
  - [Development environments](#development-environments)
  - [Module structure](#module-structure)
  - [Husky Git Hooks](#husky-git-hooks)
    - [Pre-commit Hook](#pre-commit-hook)
    - [Commit-msg Hook](#commit-msg-hook)
  - [CI](#ci)
  - [CD](#cd)
  - [Storybook](#storybook)
  - [Apollo](#apollo)
  - [NextJS](#nextjs)
  - [Use as a application dependency](#use-as-a-application-dependency)
  - [Build](#build)
- [Testing](#testing)
  - [Testing in IDE terminal](#testing-in-ide-terminal)
- [Usage](#usage)
- [Releases, changelogs and deployments](#releases-changelogs-and-deployments)
  - [Conventional Commits](#conventional-commits)
  - [Releasable units](#releasable-units)
  - [Configuration](#configuration)
  - [Troubleshoting release-please](#troubleshoting-release-please)
    - [Fix merge conflicts by running release-please -action manually](#fix-merge-conflicts-by-running-release-please--action-manually)
  - [Deployments](#deployments)
  - [(Old) manually runnable publish scripts: Publishing new versions manually without release-please](#old-manually-runnable-publish-scripts-publishing-new-versions-manually-without-release-please)
- [Known issues](#known-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

### Husky Git Hooks

This project uses [Husky](https://typicode.github.io/husky/#/) to manage Git hooks. Husky is configured to run specific scripts before committing changes to ensure code quality and consistency.

#### Pre-commit Hook

The pre-commit hook is configured to run the following commands:

```sh
yarn doctoc .
yarn lint-staged --relative
```

- `yarn doctoc .`: This command updates the table of contents in your markdown files.
- `yarn lint-staged --relative`: This command runs linting on staged files to ensure they meet the project's coding standards. The lint-staged configuration can be found from [package.json](./package.json).
  - Using `--relative` flag to reduce command line length,
    as the combined length of all the absolute paths for a large commit can get quite long

> NOTE: `doctoc` and `husky` does not work seamlessly together, since the `doctoc` does update the TOCs of the markdown files, but does not reject the pre-commit hook execution, and only leaves the refactored files as unstaged in Git.

#### Commit-msg Hook

The commit-msg hook is configured to run the following command:

```sh
npx --no-install commitlint --edit "$1"
```

- `npx --no-install commitlint --edit "$1"`: This command uses [Commitlint](https://commitlint.js.org/#/) to lint commit messages based on the project's commit message conventions. This repo follows the [Conventional Commits](#conventional-commits).

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

## Releases, changelogs and deployments

The used environments are listed in [Service environments](#service-environments).

The application uses automatic semantic versions and is released using [Release Please](https://github.com/googleapis/release-please).

> Release Please is a GitHub Action that automates releases for you. It will create a GitHub release and a GitHub Pull Request with a changelog based on conventional commits.

Each time you merge a "normal" pull request, the release-please-action will create or update a "Release PR" with the changelog and the version bump related to the changes (they're named like `release-please--branches--master--components--react-helsinki-headless-cms`).

To create a new release for an app, this release PR is merged, which creates a new release with release notes and a new tag. This tag will be picked by Azure pipeline and trigger a new deployment to staging. From there, the release needs to be manually released to production.

When merging release PRs, make sure to use the "Rebase and merge" (or "Squash and merge") option, so that Github doesn't create a merge commit. All the commits must follow the conventional commits format. This is important, because the release-please-action does not work correctly with merge commits (there's an open issue you can track: [Chronological commit sorting means that merged PRs can be ignored ](https://github.com/googleapis/release-please/issues/1533)).

See [Release Please Implementation Design](https://github.com/googleapis/release-please/blob/main/docs/design.md) for more details.

And all docs are available here: [release-please docs](https://github.com/googleapis/release-please/tree/main/docs).

### Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) to ensure that the changelogs are generated correctly.

### Releasable units

Release please goes through commits and tries to find "releasable units" using commit messages as guidance - it will then add these units to their respective release PR's and figures out the version number from the types: `fix` for patch, `feat` for minor, `feat!` for major. None of the other types will be included in the changelog. So, you can use for example `chore` or `refactor` to do work that does not need to be included in the changelog and won't bump the version.

### Configuration

The release-please workflow is located in the [release-please.yml](./.github/workflows/release-please.yml) file.

The configuration for release-please is located in the [release-please-config.json](./release-please-config.json) file.
See all the options here: [release-please docs](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md).

The manifest file is located in the [release-please-manifest.json](./.release-please-manifest.json) file.

When adding a new app, add it to both the [release-please-config.json](./release-please-config.json) and [release-please-manifest.json](./.release-please-manifest.json) file with the current version of the app. After this, release-please will keep track of versions with [release-please-manifest.json](./.release-please-manifest.json).

### Troubleshoting release-please

If you were expecting a new release PR to be created or old one to be updated, but nothing happened, there's probably one of the older release PR's in pending state or action didn't run.

1. Check if the release action ran for the last merge to main. If it didn't, run the action manually with a label.
2. Check if there's any open release PR. If there is, the work is now included on this one (this is the normal scenario).
3. If you do not see any open release PR related to the work, check if any of the closed PR's are labeled with `autorelease: pending` - ie. someone might have closed a release PR manually. Change the closed PR's label to `autorelease: tagged`. Then go and re-run the last merge workflow to trigger the release action - a new release PR should now appear.
4. Finally check the output of the release action. Sometimes the bot can't parse the commit message and there is a notification about this in the action log. If this happens, it won't include the work in the commit either. You can fix this by changing the commit message to follow the [Conventional Commits](https://www.conventionalcommits.org/) format and rerun the action.

**Important!** If you have closed a release PR manually, you need to change the label of closed release PR to `autorelease: tagged`. Otherwise, the release action will not create a new release PR.

**Important!** Extra label will force release-please to re-generate PR's. This is done when action is run manually with prlabel -option

Sometimes there might be a merge conflict in release PR - this should resolve itself on the next push to main. It is possible run release-please action manually with label, it should recreate the PR's. You can also resolve it manually, by updating the [release-please-manifest.json](./.release-please-manifest.json) file.

#### Fix merge conflicts by running release-please -action manually

1. Open [release-please github action](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/actions/workflows/release-please.yml)
2. Click **Run workflow**
3. Check Branch is **master**
4. Leave label field empty. New label is not needed to fix merge issues
5. Click **Run workflow** -button

There's also a CLI for debugging and manually running releases available for release-please: [release-please-cli](https://github.com/googleapis/release-please/blob/main/docs/cli.md)

### Deployments

When a Release-Please pull request is merged and a version tag is created (or a proper tag name for a commit is manually created), this tag will be picked by Azure pipeline, which then triggers a new deployment to staging. From there, the deployment needs to be manually approved to allow it to proceed to the production environment.

The tag name is defined in the [azure-pipelines-release.yml](./azure-pipelines-release.yml).

### (Old) manually runnable publish scripts: Publishing new versions manually without release-please

> NOTE: This is an old way of publishing this project. Using the release-please process is highly recommended.

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
