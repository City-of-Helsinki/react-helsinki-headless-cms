# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

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
