const { injectAxe, checkA11y } = require('axe-playwright');
module.exports = {
  preVisit: async (page) => {
    // before the story has been rendered inject AXE
    await injectAxe(page);
  },
  postVisit: async (page) => {
    // after the story has been rendered run AXE checks only on #storybook-root, not the whole page
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
