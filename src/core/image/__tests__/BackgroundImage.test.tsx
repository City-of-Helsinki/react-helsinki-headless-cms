import React from 'react';
import { axe } from 'jest-axe';
import { waitFor } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
import { BackgroundImage } from '../BackgroundImage';

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

test('renders BackgroundImage url without accessiblity violations', async () => {
  const { container } = render(<BackgroundImage id="45" url="valid.jpg" />);
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
  } = render(<BackgroundImage id="45" url="invalid.jpg" />, undefined, {
    fallbackImageUrls: ['fallback_image.jpg'],
  });
  mockImage.onerror(); // invalid.jpg
  mockImage.onload(); // fallback_image.jpg
  await waitFor(() =>
    expect(image).toHaveStyle(`background-image: url(fallback_image.jpg);`),
  );
});

test('renders custom fallback background image url', async () => {
  const {
    container: { firstChild: image },
  } = render(
    <BackgroundImage
      id="abc-123"
      url="invalid.jpg"
      customFallbackUrl="custom_fallback_image.jpg"
    />,
  );
  mockImage.onerror(); // invalid.jpg
  mockImage.onload(); // custom_fallback_image.jpg
  await waitFor(() =>
    expect(image).toHaveStyle(
      `background-image: url(custom_fallback_image.jpg);`,
    ),
  );
});
