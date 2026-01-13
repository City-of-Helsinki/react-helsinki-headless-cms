# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

## [3.0.1](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/compare/react-helsinki-headless-cms-v3.0.0...react-helsinki-headless-cms-v3.0.1) (2026-01-13)


### Bug Fixes

* Page table figure should be displayd as grid ([c951ac2](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c951ac22826ea420f3639f0ad61c5b999b1b1903))
* Sidebar simple card link button icon size ([c9e88cb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c9e88cb4af0a13d55b2f17388f5c4599b694d998))

## [3.0.0](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/compare/react-helsinki-headless-cms-v2.1.0...react-helsinki-headless-cms-v3.0.0) (2025-12-30)


### ⚠ BREAKING CHANGES

* add package to city-of-helsinki organisation scope

### Features

* Add package to city-of-helsinki organisation scope ([14a2227](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/14a2227e375615004ab8dd03ea6713840b8545f3))
* Include sourcemaps in package ([185abfe](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/185abfefdfc41e9d51e648433be080ff503fa6b6))
* **linting:** Upgrade to eslint v9 & flat config format ([a8c4936](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a8c49364d2ff210583d734c58d869fba444c3df7))


### Bug Fixes

* Disentangle customRender & testing-library imports from each other ([a1b6b4a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a1b6b4a3d0948732843631bdf34640286bda789a))
* **linting:** Add display names for React components that lack them ([b16d26e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/b16d26e978a29fa60558ec896e9fcb74fb79e3e9))
* **linting:** Add key props to &lt;div&gt; tags to silence react/jsx-key rule ([c617d1b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c617d1b3f4a6c36632bb8165aba010b4f450c6cc))
* **linting:** Don't use ref in dependency array in SocialMediaFeedModule ([f88e66a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f88e66a74ea9496bc6e8d92eb29e5c30c92b5abf))
* **linting:** Simplify state handling in SearchPageContent component ([13e9409](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/13e94097a40434bbf23913dd79b54fbaa2cf015a))
* **navigation:** Add client app router support to language changing ([209dd09](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/209dd095b6b1d18dbd1dd025cb6faf2bf65df365))


### Documentation

* Add contributing and license to readme ([57f2d7d](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/57f2d7d7c76ae972b3d95cfbcf0b5a53e483d3f5))
* How to use tarballs, file- and portal protocol in local dev ([a10d49e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a10d49ec53d486892214e54724a71fbd87d09f00))
* Misc improvements to readme ([e9288d7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e9288d74d49256895b8582461bb098c890f11e24))

## [2.1.0](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/compare/react-helsinki-headless-cms-v2.0.2...react-helsinki-headless-cms-v2.1.0) (2025-12-12)


### Features

* Add pre-commit hooks using husky ([cc89127](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/cc89127a97814897086773f0fba52341c1d853d6))
* **docker:** Add .dockerignore file ([780cf45](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/780cf4578c0643d6923ff971054b0c7e55327e8e))
* Improve releasing with release-please workflow ([90fdbbb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/90fdbbb845db72e9b223289a0d93b06776725a99))
* Require node v22 LTS, use node v22 in Docker ([25ef636](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/25ef636c0b73ce5df1f76f79b4d20b3317870e68))


### Bug Fixes

* **dependabot:** Force hds-react cookie to v0.7.2 to fix depbot issue 28 ([b2162eb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/b2162ebc355ed9949c8f1bd5741b0b605fc88f40))
* **sonar:** Correct identical sub-expressions ([e36f0c6](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e36f0c601994d87d5723344873ba5136561bb3e9))
* **sonar:** Fix weak cryptography hotspots in story book files ([656d765](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/656d7654086758d1675bde2d5eea40d1417470f3))
* **sonar:** Fixes to multiple medium level sonar issues ([310d82e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/310d82e9d889a0efa5bd95ef43cf3b10ff634888))
* **sonar:** Ignore functions 4 level deep in tests ([f0c285f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f0c285f21ac820333935d0de27b9dd4986c58233))
* **sonar:** Ignore Storybook stories in coverage report ([3e15db6](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3e15db6dd983046bcebf29b4c2ce5e02a899a127))
* **sonar:** Ignore test mocks in coverage report ([251297c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/251297cf27803ca9eac23332d665cfe27e848bc6))
* **sonar:** Remove duplicated CSS rule ([a0527fb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a0527fb7611398fb955f13dd994b4262f688380a))
* **sonar:** Security hotspot in string utils ([2b934a4](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2b934a4e786035124f920f3d5f2540a0e44e2dda))
* **sonar:** Test image error handler should use reason ([f19f1c7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f19f1c75972932a124f663ca8769ca864c630891))


### Dependencies

* Update packages to latest minor, request @apollo/client ^3.14.0 ([afe5aa0](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/afe5aa0dafbbbd9bf2398fc3132f2bc6f8c8cdc3))


### Documentation

* Update storybook version & known issues in README ([3d22f8a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3d22f8aea975c2b3b342d48363028eff707c367e))

## [Unreleased]

## 1.0.0-alpha2

### Added

- Notification component
- Handle injection of page meta when lib consumer provides an interface for it

## 1.0.0-alpha1

### Added

- Page component
- PageContent component
- Navigation component
- Navigation component that can request its own data in an Apollo project
- NextJS getLanguageStaticProps and getMenuStaticProps utilities that can be used to fetch hydrated data when using static page generation
- PageContent component that can request its own data in an Apollo project
- NextJS getLanguageStaticProps that can be used to fetch data when generating static pages
- Link component for easy interoperability between anchor props and HDS Link component

### Fixed

- Canary publish script
