# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

## [3.0.0](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/compare/react-helsinki-headless-cms-v2.0.2...react-helsinki-headless-cms-v3.0.0) (2025-12-09)


### ⚠ BREAKING CHANGES

* upgrade to HDS v4

### Features

* Add hierarchical menus & universal bar menu support to Navigation ([2609d15](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2609d15d9d41743f7419162d6ab01be2e6e0a83f))
* Add id, role and size attributes to the tag component ([3dae957](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3dae957d19bc3c145b8624098f758b3a7ab4d2a6))
* Add pre-commit hooks using husky ([cc89127](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/cc89127a97814897086773f0fba52341c1d853d6))
* Axe accessibility tests ([#194](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/194)) ([cf9beb7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/cf9beb77545b7812b504f14cbb8413256dc9a047))
* Breadcrumbs included in the page and the post queries ([bfb14d1](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/bfb14d1c4da47abb443a0fc6741da8d0ea7e9494))
* Breadcrumbs to archive search page ([0508755](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/05087552398dac8c0b8da5d0bfb6b3182be38e0e))
* **card:** Arrow link label ([dfcc509](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/dfcc5095298eeda03296009d9976234a78b3d418))
* **carousel:** Navigate with dots ([110266d](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/110266dd99a6896ec2bc5f99e049497b407e8a8f))
* **carousel:** Provide carousel items count from context ([bf62fd4](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/bf62fd4492e37537b9b38e18adf63283c14e8e06))
* Complete HDS 4.8.0 upgrade and HCRC 2.0.0 release ([70c3128](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/70c312817681a26f4446970b1723dcbc415add38))
* Event search collection replaces a start-param for past with the "now" ([3a07780](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3a077804bcd68ea42e1abcc9c5f43df2da0dc035))
* Fix headings ([#54](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/54)) ([f0159bd](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f0159bd7552f68fcc315ed13d466cd6eb31110fc))
* HDS 3.9 ([#184](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/184)) ([6bbcf55](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/6bbcf559ad8d94fe5ded9a210ce17ebc9a317b58))
* Hh-136 carousel fixes ([#41](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/41)) ([e3f7fa0](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e3f7fa0b45bf606dbbfb5ea56c4f2b80951c58ea))
* Image and image gallery modules ([#183](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/183)) ([6e92ddb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/6e92ddb2ad25fc1e8a9d3bb218b4d78e1d97ce00))
* Image link should not render the external link icon by default ([f2c2cce](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f2c2cceba022dbe6cfdd7406b3bfcd379e54838a))
* Improve releasing with release-please workflow ([90fdbbb](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/90fdbbb845db72e9b223289a0d93b06776725a99))
* **link:** Handle mailto: and tel: prefixed hrefs in &lt;Link&gt; specially ([c77cf79](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c77cf798aecf668efcc796eed980f034755932a2))
* Make header logo and universal bar primary link configurable ([cc4a2a8](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/cc4a2a8e48c85eea9693cd25b0d2258abe76f48b))
* New content modules ([#115](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/115)) ([f762f95](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f762f95e3eca0bd851a9ffffcf64fb976ccea618))
* Page context provider ([e729dbe](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e729dbefbc911d291a5c28f948955aad6bb28814))
* Replace old breadcrumbs with HDS breadcrumbs ([1859559](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/1859559209a44ffab582fb787a7dd0d99ae240d1))
* Smaller menu item fragment can be fetched conditionally ([2dd0e81](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2dd0e813f92038f408e59222adb7adc5f17bcf7c))
* Social media feed module ([#188](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/188)) ([f0392c3](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f0392c3f464342cd612744e4ce91c239366565d4))
* Style tables in HtmlToReact using HDS core styles, use hds* v2.17 ([568b71b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/568b71b4af22f5654a09f49302744e45be4a5fec))
* Switch page content order when using small screen ([17b0b29](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/17b0b2911f920d2fe8524516be382daac5f52ace))
* Update to HDS v3.1.0, use Header in Navigation component ([61651b9](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/61651b96ba82b219b432eff823f312162a6ef28d))
* Upgrade to HDS v3.6.0, set version to 1.0.0-alpha265 ([a8dc0a4](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a8dc0a4dd53f8aff8c67c7b8b9e9719a3f1de7f5))
* Upgrade to HDS v3.7, bump version to v1.0.0-alpha272 ([eda2a4a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/eda2a4aae71a4f02d12852e96ca620fe9a2c6a09))
* Upgrade to HDS v3.8, bump version to v1.0.0-alpha279 ([1e6d446](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/1e6d446b5714eef5adefe090d0e9663a1f33a18d))
* Upgrade to HDS v4 ([27b03d5](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/27b03d54f383614817fae4529fe6b63c350eb9d3))
* Use new CMS urls everywhere, bump version to 1.0.0-alpha292 ([af07ac9](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/af07ac91b460b06111f78c9ae77ec2c4f2501ca8))
* UseTranslationWithFallback hook ([06aca62](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/06aca62eff7402fa75e8b5676a5d5930f260177f))
* Wrap page content to page context provider ([b4b5e09](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/b4b5e09dffbb092e575f80a3ffec9c8c61b54ee8))


### Bug Fixes

* Add meta tags ([#175](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/175)) ([c7ef71e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c7ef71e54e406241948f02ee6e6eca620323e5b6))
* Add missing key-properties to page module components ([5acdf67](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/5acdf67807edbc164ecef2c3d0770a6a425d9aec))
* Archive page meta tags ([#126](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/126)) ([d1f12a2](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d1f12a2a69965775cca238ece81f74ee7eb7480b))
* Archive page title improvements ([#176](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/176)) ([1a39f61](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/1a39f61104295d5a9b098187ef19e1df5ad48e64))
* Article hero image info ([#110](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/110)) ([2d7b63f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2d7b63fdd1fdfad1cecbf5ba8529f6e6d1c2d167))
* Card content height ([#185](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/185)) ([7ea325c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/7ea325c350fadc00ed3b282664ea4080306c8bc9))
* Card delimited url redirect ([#121](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/121)) ([70cc3e9](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/70cc3e9f78c18aa173c7d3e531521b78852f5a9f))
* Card height improvements and koros 1px ([#142](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/142)) ([6cdfae8](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/6cdfae8cce0806bfebf1411b995a824e30da2385))
* Card height in carousel ([#202](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/202)) ([cc27af1](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/cc27af19b778b8a1cfb319f87b3ac49ea35c22e7))
* Card height in the carousel ([#190](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/190)) ([1d26dd8](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/1d26dd8943d3bf2a8c6dacf2a1842c9f22707d32))
* Card image size ([#140](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/140)) ([93f14dc](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/93f14dc434e15de4154db9248bef3b8c2af16e87))
* Card improvments ([#180](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/180)) ([3877900](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3877900937c2605e090c55fd687af29da8ea1aa8))
* Card link hover and let right position switch ([#181](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/181)) ([843438c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/843438c953bfd99dc494762b42b5b687442eee1b))
* Card module delimited alignment support ([#141](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/141)) ([25f401b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/25f401badd6c723e0f2855f4dc1afd8b4a530ec3))
* Cards fix ([#192](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/192)) ([8647aec](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/8647aeceb41112ed3baca8d7333afe7b927c365a))
* Carousel fix styling ([#44](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/44)) ([917b604](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/917b6043f654952200bcd88c60108205b677a969))
* Carousel slider page ref-property attribute toggle ([d10775b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d10775b5f89faee2e9f420294a6e4ac46c8b6b69))
* **carousel:** Add region roles and aria labels to carousel ([d4dc0df](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d4dc0df903e02a5d17b4f53f8f469f93c37430e8))
* **carousel:** Collection navigation withDots enabled by default ([66e1247](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/66e1247f47b7f8fd4af67bff1a1937d5474502d5))
* **carousel:** HandleUpdateSlideProps ([76eb64a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/76eb64a127dfb02d0b4a08347cd91e65bc6d9793))
* **carousel:** Key-property to CarouselSliderPage ([798f187](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/798f187ff8b6bb19687d5342c0b4c5a9d90b2530))
* **carousel:** Load more button and other improvements ([444eee8](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/444eee8526d7238ebf62e32dcbf4f7455b601268))
* Carousels heading h1 to h2 ([#177](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/177)) ([020c13f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/020c13fd6f77f5cf8bd9fe54ae314f5ee9c05719))
* Content modules improvements ([#120](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/120)) ([2a1a631](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2a1a63125a326df588428f9053cb89f860dec51b))
* Convert booleans presented in string format to actual booleans ([a34617f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a34617f3e3aa6c9a71d143f5c347cd8407d4b4ab))
* Css issues ([#119](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/119)) ([eb22b9c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/eb22b9c19e464e8dbee9221abcd9a17d210f7c32))
* Css link icon right ([#179](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/179)) ([d11cb5d](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d11cb5d7bfabc65128d482fb3f636e437e341145))
* Docker yarn v1 and docs ([#198](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/198)) ([383af6e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/383af6ec74b270b3f846efff513e825f24d2fceb))
* **docker:** Update node version to v20, previous v16 was incompatible ([61749e1](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/61749e1f2888abd07bed81a3dbd1a601c83e120b))
* Downgrade react parser ([#199](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/199)) ([48902b1](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/48902b1c2f0e08e59ef63f02c7537e2729738400))
* Dynamic icon loading caused infinite loop ([6772d06](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/6772d064a4ebc679b79fad287fed7a32038fc26b))
* Every secondary link span defined a new flex ([e553cd6](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e553cd668d5befb24e6c2760e369b93de1143243))
* Export getTextFromHtml from string utils ([135b96e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/135b96ed853e48b75f0983c776a52984f0c410d0))
* Fix calling getEventCardProps with wrong parameters ([33c3e20](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/33c3e2066f89ec9dbac449c36b33ecf7b4722c26))
* Fix HDS table padding by removing conflicting styles ([d0a0076](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d0a0076d1328a893e589bca628fd77639dcb4c28))
* Fix table.css packaging, handle is-style-stripes style in figure ([8f9c54c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/8f9c54c736979ab446e248ede09f6f71e76d7cc6))
* **hcrc-103:** Upgrade rollup*, use dts & typescript2 rollup plugins ([8b6f808](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/8b6f808bf36b0aac5c9aeb3e1ab323e384484ea8))
* Hcrc-62 cards and carousels fixes ([#42](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/42)) ([80fbbdc](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/80fbbdcd102c34549cd5bdb4e95819c0498c3d54))
* Heading styles for page content ([#92](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/92)) ([5076a6f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/5076a6f30ebe69ec41705d7ff480b1da44eb9039))
* Hero image size ([#200](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/200)) ([4610923](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/461092338c7cf4d70a2923058264b8e9306e57b5))
* Hero ui tweaks ([#130](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/130)) ([84cf18b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/84cf18bbc04170661c5f30edd4a48ef55964dfe7))
* Image link should search img-tag deeper from the children ([ef0ced7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/ef0ced7bfef796f746e9f50922d368fbaf9e9269))
* Image sizes should be consistent and include size "large" ([e022e39](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/e022e39776f9582ac3afda3bacfe2b0bcb8f5c40))
* Improve stories and documentation ([#162](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/162)) ([3bed598](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3bed598f665cd0fbefbcf4e78fb7eb99f5f7e525))
* Large card image ratio ([#113](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/113)) ([4b6a565](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/4b6a5656e7f75a714623b7e18860370be72b1229))
* Large card mobile view same as card mobile view ([#72](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/72)) ([ec02264](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/ec022649725eaf543d47b626956f4787b9655ae3))
* Link base focus-visible outline to mirror focus styles ([aa0aa94](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/aa0aa94a681e5d29594e5d220305250c86c1ca01))
* Link default bg color ([#182](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/182)) ([5694eae](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/5694eaeebe4aec75b2d67b4236cd78b91e0422f0))
* Link icon styles ([#108](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/108)) ([820956b](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/820956b20a92eaab9ebc61216c5cc67c677e4e8f))
* Load more button hide ([#143](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/143)) ([f44ad8e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f44ad8e318d5dbfa9c2bdf36bd82864a412482db))
* Loading spinner improvement ([#48](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/48)) ([fb11859](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/fb11859ba38c02b19419c179d8266f3dd3404fb7))
* **navigation:** Override header max width using style instead of theme ([16a3a48](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/16a3a484bfdd79960028d699d9eeff8caa756061))
* **navigation:** Override header max width using style instead of theme ([f439b06](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/f439b068b2b37760c685ea9b9489daee91c431e7))
* No outline for non clickable tags ([#109](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/109)) ([b0428d6](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/b0428d65a94df4cf15e9f4e93ab58cef74e2314e))
* Order languages in Navigation to order Finnish, Swedish & English ([d54d0b6](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/d54d0b6a3e4ce99b78ba587da2a2d93db4873c4f))
* Packages upgrade and code refactoring ([#196](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/196)) ([4891272](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/48912728f004ee2732672d8338a2248b2b063f97))
* React component key generation and usage ([2959438](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/2959438cb0c7959078bab94d3d0eb09a0ff6754c))
* Registration fields fragment in event details schema ([5dcba0f](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/5dcba0fb0b4402473e2eb98d9962c239c7056963))
* Remove remainingAttendeeCapacity field from event document ([124d0b9](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/124d0b9ab93e842f5841e80eda7c84e73e48ba69))
* Rename registration field to be consistent with others ([7f25de8](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/7f25de8922fc57186b501f2ff67cde441dcc77fe))
* Sanitizing social feed script ([#189](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/189)) ([088729e](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/088729ebfe9d344931185f560faa34aebe3197b3))
* Show image with no title ([#129](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/129)) ([ef0d6ac](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/ef0d6acb8871030f1007639e7cbbfd982117ad13))
* Sidebar content should skip the link items without an url ([c181f9a](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c181f9a0b93866fc93d65e3b4e801d7888a5aeef))
* Skip collections' events by ids query when no ids are given ([05b41b3](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/05b41b3256ded93b5595452c891c7186ea91d8ac))
* **tests:** Linter issues in jest tests ([3785ff7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3785ff7ce16585a609e46b4e1df4a8033fdcb6ca))
* Type issues and add typecheck script ([57b42c5](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/57b42c5bf50b804ec83190ec0eb1f9956e3b9499))
* Types comments in components and utils ([#195](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/issues/195)) ([c5a0064](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/c5a0064571e4b082fcf8b61060f35952d37472fe))
* **types:** Use strict type checking and fix all typing issues ([a9c6276](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/a9c6276254f4396a98f31c97c66ab6c942179389))
* Upgrade GraphQL schemas, fix tests, bump version to 1.0.0-alpha293 ([80e9d70](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/80e9d702bde1fc6d70740fd3cd178c63e7294122))
* Upgrade hds-react to address issues with global css ([65a5d6c](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/65a5d6c06efcbda2e9695d203d9aeb325713ee04))
* Upgrade html-react-parser from 4.2.1 to 4.2.9 ([18850b7](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/18850b79d7231d5f76a8d0270390d3c9148065e8))
* Upgraded and auto migrated storybook and related dependencies ([0651b69](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/0651b698bee5fb494367b3603bdb8fd63dbf6fdd))
* Use mainContentId from Config in Navigation, use ?? instead of || ([4d78447](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/4d78447b54d74d81c7ba1046da7b654e6c3a9757))
* UseLocaleStorageValue should not do anything server side ([3ba7835](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/3ba7835378ff974d1389ec0428aacb9fdee1bdcb))


### Dependencies

* Manage package peer dependencies ([fb38795](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/fb38795df63c9e475c3e960196c8b7a0c07c3de3))


### Documentation

* Improved the readme ([ffbe580](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/ffbe580d94eb617aad1884fddeee59ebd8ee7caa))
* Improved the storybooks ([037dd04](https://github.com/City-of-Helsinki/react-helsinki-headless-cms/commit/037dd04ba105738813749013f670b97323a7b162))

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
