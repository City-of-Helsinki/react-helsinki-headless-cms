import React from 'react';
import { axe } from 'jest-axe';

import { render, screen } from '../../../common/utils/testingLibrary';
import { Link } from '../Link';

test('for accessibility violations', async () => {
  const { container } = render(<Link href="https://www.google.com/" />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('renders internal link', () => {
  render(<Link href="/home">Go to home page</Link>);
  const link = screen.getByRole('link', { name: 'Go to home page' });
  expect(link).toBeInTheDocument();
  expect(link).not.toHaveAttribute('target');
  expect(link).not.toHaveAttribute('rel');
});

test('renders internal link which opens in a new tab', () => {
  render(
    <Link href="/home" openInNewTab>
      Go to home page
    </Link>,
  );
  expect(
    screen.getByRole('link', { name: 'Go to home page. Opens in a new tab.' }),
  ).toBeInTheDocument();
});

test('renders external link with external icon by default', () => {
  render(<Link href="https://www.google.com/">Search from google</Link>);
  const link = screen.getByRole('link');
  expect(link.lastChild.nodeName).toEqual('svg');
});

test('renders external link without external icon', () => {
  render(
    <Link href="https://www.google.com/" showExternalIcon={false}>
      Search from google
    </Link>,
  );
  expect(screen.getByRole('link').lastChild.nodeName).not.toEqual('svg');
});

test('renders external link which opens in a new tab by default', () => {
  render(<Link href="https://www.google.com/">Search from google</Link>);
  const link = screen.getByRole('link', {
    name: 'Search from google. Opens in a new tab. Opens a different website.',
  });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('renders external link which doesnt open in a new tab', () => {
  render(
    <Link href="https://www.google.com/" openInNewTab={false}>
      Search from google
    </Link>,
  );
  expect(
    screen.getByRole('link', {
      name: 'Search from google. Opens a different website.',
    }),
  ).toBeInTheDocument();
});

test('renders internal link with specified screen reader text', () => {
  render(
    <Link href="https://www.google.com/" aria-label="This is for screen reader">
      Go to home page
    </Link>,
  );
  expect(
    screen.getByRole('link', { name: 'This is for screen reader' }),
  ).toBeInTheDocument();
});
