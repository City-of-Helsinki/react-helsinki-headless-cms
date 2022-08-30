import React from 'react';

import { render, screen } from '../../../common/utils/testingLibrary';
import pageMock, { sidebarLinkList } from '../__mocks__/page.mock';
import { PageContent } from '../PageContent';

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
      name: new RegExp(link.title, 'g'),
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
