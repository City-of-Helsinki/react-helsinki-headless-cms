import type { ThirdPartyLicensesConfig } from '@city-of-helsinki/license-notices';

/**
 * Everything about the third-party license notices of the static Storybook
 * build that is specific to this repository. The generator itself comes from
 * the license-notices package and knows nothing about this project.
 */
export const thirdPartyLicensesConfig: ThirdPartyLicensesConfig = {
  repositoryUrl:
    'https://github.com/City-of-Helsinki/react-helsinki-headless-cms',

  licenseDecisions: {
    dompurify: {
      license: 'Apache-2.0',
      note:
        'Offered by its author under "(MPL-2.0 OR Apache-2.0)". This ' +
        'distribution elects Apache-2.0, so the MPL-2.0 obligations do not ' +
        'apply to this component.',
    },
  },

  // hds-core: the table styles, compiled in by hdsCoreTable.module.scss.
  // hds-design-tokens: the tokens forwarded by src/common/styles.
  sassResolvedPackages: ['hds-core', 'hds-design-tokens'],
};
