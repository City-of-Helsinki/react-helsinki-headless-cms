const { injectAxe, checkA11y } = require('axe-playwright');
module.exports = {
  preRender: async (page) => {
    // before the story has been rendered inject AXE
    await injectAxe(page);
  },
  postRender: async (page) => {
    // after the story has been rendered rn AXE checksonly on root not the whole page
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
