import React from 'react';

import { render, screen } from '../../../common/utils/testingLibrary';
import pageMock, { sidebarLinkList } from '../__mocks__/page.mock';
import { PageContent } from '../PageContent';
import kukkuuPageDemosivu from '../../../mocks/responses/page/kukkuu-page-demosivu.json';
import { PageType } from '../../../common/headlessService/types';
import { ConfigProvider } from '../../configProvider/ConfigProvider';
import { Config } from '../../configProvider/configContext';
import { HtmlToReactProps } from '../../../common/components/htmlToReact/HtmlToReact';

describe('PageContent', () => {
  test('renders page with expected content', () => {
    render(<PageContent page={pageMock} />);

    // Title of page is presented correctly
    expect(
      screen.getByRole('heading', { name: pageMock.title, level: 1 }),
    ).toBeInTheDocument();
    // Featured image is included on the page
    expect(
      screen.getByRole('img', {
        name: pageMock.featuredImage.node.altText,
      }),
    ).toBeInTheDocument();
    // Check content
    expect(screen.getByRole('article')).toMatchSnapshot();

    // Sidebar contains expected links
    expect(
      screen.getByRole('heading', { name: sidebarLinkList.title, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(sidebarLinkList.description)).toBeInTheDocument();
    expect(document.getElementById(sidebarLinkList.anchor)).toBeInTheDocument();
    sidebarLinkList.links.forEach((link) => {
      const linkElement = screen.getByRole('link', {
        name: new RegExp(link.title),
      });

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.url);

      if (link.target === '_blank') {
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
        expect(linkElement).toHaveAttribute(
          'aria-label',
          expect.stringContaining('opens in a new tab'),
        );
      }
    });
  });

  describe('HtmlToReact is used to sanitize the CMS page content', () => {
    const defaultAllowedUnsafeTags = ['iframe'];
    const defaultTrustedOrigins = [
      'https://www.youtube.com',
      'https://player.vimeo.com',
    ];

    describe('embedded video content is in an iframe', () => {
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
            <ConfigProvider
              config={
                {
                  htmlSanitizer: {
                    allowedUnsafeTags,
                    trustedOrigins,
                  },
                } as Config
              }
            >
              <PageContent page={kukkuuPageDemosivu.page as PageType} />
            </ConfigProvider>,
          );
          const iframes = container.querySelectorAll('iframe');
          expect(iframes.length).toBe(expectedIframesCount);
        },
      );
    });
  });
});
