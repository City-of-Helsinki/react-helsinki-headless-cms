# React Helsinki Headless CMS

Demo:

## Quick Start

**Note:** This component does not inject the Helsinki Grotesk font for you--you must add it yourself.

### 1. Install

```bash
yarn add react-helsinki-headless-cms
```

### 1. Import

`App.tsx`

```tsx
// ...
import { HelloWorld } from "react-helsinki-headless-cms";

function App() {
  return <HelloWorld />;
}
```

## For Developers of Library

| Name         | Purpose                                                                                                  | Useful Options                |
| ------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `yarn dev`   | Starts storybook environment that can be used for developing components.                                 |                               |
| `yarn lint`  | Lints the application to be according to quality standards (eslint) and formatting standards (prettier). | `--fix`: fix fixable problems |
| `yarn test`  | Runs tests with jest.                                                                                    | `--watch`: enable watch mode  |
| `yarn build` | Builds application with rollup.                                                                          |                               |

### Storybook

The `yarn dev` command will start `storybook` in port `6006`. When you make changes in `src`, they'll be automatically updated to `storybook`.

### Build

This project uses `rollup` for its final bundle.

### Releasing new versions

A new version of the `npm` package is automatically released when a new release is created in GitHub. Additionally, a new canary release is created after each new push into master.
