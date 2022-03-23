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
            currentLanguageCode="EN"
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

## For Developers of Library

| Name                  | Purpose                                                                                                                    | Useful Options                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `yarn dev`            | Starts storybook environment that can be used for developing components.                                                   |                               |
| `yarn lint`           | Lints the application to be according to quality standards (eslint) and formatting standards (prettier).                   | `--fix`: fix fixable problems |
| `yarn test`           | Runs tests with jest.                                                                                                      | `--watch`: enable watch mode  |
| `yarn build`          | Builds application with rollup.                                                                                            |                               |
| `yarn publish-canary` | Publishes a canary tagged version of the application. CD is configured to run this script on additions tot he main branch. |                               |

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
