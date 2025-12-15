import React from 'react';
import { axe } from 'jest-axe';
import { waitFor } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
import { PageSection } from '../PageSection';

const mockImage = {
  src: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onload: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onerror: () => {},
};

const originalImage = window.Image;
beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.Image = () => mockImage;
});

afterEach(() => {
  window.Image = originalImage;
});

test('renders image url without accessiblity violations', async () => {
  const { container } = render(
    <PageSection backgroundImageUrl="valid.jpg">Hello</PageSection>,
  );
  const { firstChild: image } = container;
  mockImage.onload(); // valid.jpg
  await waitFor(() =>
    expect(image).toHaveStyle(`background-image: url(valid.jpg);`),
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('renders fallback background image url from app configuration', async () => {
  const {
    container: { firstChild: image },
  } = render(
    <PageSection backgroundImageUrl="invalid.jpg">Hello</PageSection>,
    undefined,
    {
      fallbackImageUrls: ['fallback_image.jpg'],
    },
  );
  mockImage.onerror(); // invalid.jpg
  mockImage.onload(); // fallback_image.jpg
  await waitFor(() =>
    expect(image).toHaveStyle(`background-image: url(fallback_image.jpg);`),
  );
});

test('Doesnt render fallback image when no backgroundImageUrl set', async () => {
  const {
    container: { firstElementChild: image },
  } = render(<PageSection>Hello</PageSection>);
  const styleProps = Object.values(window.getComputedStyle(image!));
  expect(styleProps).not.toContain('background-image');
});
