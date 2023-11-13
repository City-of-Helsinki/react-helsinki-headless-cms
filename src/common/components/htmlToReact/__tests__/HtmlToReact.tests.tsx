import React from 'react';

import { render } from '../../../utils/testingLibrary';
import { HtmlToReact, HtmlToReactProps } from '../HtmlToReact';
import kukkuuPageDemosivu from '../../../../mocks/responses/cms/page/kukkuu-page-demosivu.json';

const defaultAllowedUnsafeTags = ['iframe'];
const defaultTrustedOrigins = [
  'https://www.youtube.com',
  'https://player.vimeo.com',
];

/** There should be 2 iframes in the test data: 1 for a Youtube and 1 for Vimeo. */
const assertIframesTestData = () => {
  expect(
    (kukkuuPageDemosivu.page.content.match(/<\/iframe>/g) || []).length,
  ).toBe(2);
  defaultTrustedOrigins.forEach((origin) => {
    expect(
      (kukkuuPageDemosivu.page.content.match(new RegExp(origin)) || []).length,
    ).toBe(1);
  });
};

describe('HtmlToReact', () => {
  describe('replaceDomNodeWithReactComponent', () => {
    describe('iframe usage for embedded videos is unsafe, so the source origins should be verified', () => {
      beforeAll(() => {
        assertIframesTestData();
      });

      it.each<
        [
          number,
          HtmlToReactProps['allowedUnsafeTags'],
          HtmlToReactProps['trustedOrigins'],
        ]
      >([
        [0, [], []],
        [0, undefined, undefined],
        [0, undefined, defaultTrustedOrigins],
        [0, defaultAllowedUnsafeTags, undefined],
        [1, defaultAllowedUnsafeTags, [defaultTrustedOrigins[0]]],
        [1, defaultAllowedUnsafeTags, [defaultTrustedOrigins[1]]],
        [2, defaultAllowedUnsafeTags, defaultTrustedOrigins],
      ])(
        'renders %s iframes when allowedUnsafeTags is %s and trustedOrigins is %s',
        (expectedIframesCount, allowedUnsafeTags, trustedOrigins) => {
          const { container } = render(
            <HtmlToReact
              allowedUnsafeTags={allowedUnsafeTags}
              trustedOrigins={trustedOrigins}
            >
              {kukkuuPageDemosivu.page.content}
            </HtmlToReact>,
          );
          const iframes = container.querySelectorAll('iframe');
          expect(iframes.length).toBe(expectedIframesCount);
          // Each iframe src.attribute is listed in the trusted origins
          iframes.forEach((iframe) => {
            expect(trustedOrigins.includes(new URL(iframe.src).origin));
          });
        },
      );
    });
  });
});
