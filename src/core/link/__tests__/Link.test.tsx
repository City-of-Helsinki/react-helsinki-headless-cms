import React from 'react';
import { axe } from 'jest-axe';
import { screen } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
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
  expect(link.lastChild?.nodeName).toEqual('SPAN');
});

test('renders external link without external icon', () => {
  render(
    <Link href="https://www.google.com/" showExternalIcon={false}>
      Search from google
    </Link>,
  );
  expect(screen.getByRole('link').lastChild?.nodeName).not.toEqual('svg');
});

test('renders email link with envelope icon', () => {
  render(<Link href="mailto:test@example.org">test@example.org</Link>);
  const linkLastChild = screen.getByRole('link').lastChild;
  expect(linkLastChild?.nodeName).toEqual('SPAN');
  const span = linkLastChild as HTMLSpanElement;
  expect(span.lastChild?.nodeName).toEqual('svg');
  const svg = span.lastChild as SVGSVGElement;
  expect(svg).toHaveAttribute('aria-label', 'envelope');
});

test('renders phone link with phone icon', () => {
  render(<Link href="tel:+358 12 345 789">+358 12 345 789</Link>);
  const linkLastChild = screen.getByRole('link').lastChild;
  expect(linkLastChild?.nodeName).toEqual('SPAN');
  const span = linkLastChild as HTMLSpanElement;
  expect(span.lastChild?.nodeName).toEqual('svg');
  const svg = span.lastChild as SVGSVGElement;
  expect(svg).toHaveAttribute('aria-label', 'phone');
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

test('the link with image should not show an external icon by default', () => {
  const { container } = render(
    <Link href="https://www.google.com/">
      Text for an external link with image
      <img src="#" alt="this is an img inside an external link" />
    </Link>,
  );
  expect(container.childElementCount).toBe(1);
  expect(container.lastChild?.nodeName).not.toEqual('svg');
  expect(container).toMatchSnapshot();
});
