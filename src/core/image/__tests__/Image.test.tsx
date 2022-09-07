import React from 'react';
import { axe } from 'jest-axe';

import { render, screen, waitFor } from '../../../common/utils/testingLibrary';
import { Image } from '../Image';

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

test('renders image src without accessiblity violations', async () => {
  const { container } = render(<Image id="45" src="valid.jpg" alt="a pic" />);

  mockImage.onload(); // valid.jpg
  const image = screen.getByAltText('a pic');
  await waitFor(() => expect(image).toHaveAttribute('src', 'valid.jpg'));
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('renders fallback image url from app configuration', async () => {
  render(<Image id="45" src="invalid.jpg" alt="a pic" />, undefined, {
    fallbackImageUrls: ['fallback_image.jpg'],
  });
  mockImage.onerror(); // invalid.jpg
  mockImage.onload(); // fallback_image.jpg
  const image = screen.getByAltText('a pic');
  await waitFor(() =>
    expect(image).toHaveAttribute('src', 'fallback_image.jpg'),
  );
});

test('renders custom fallback background image url', async () => {
  render(
    <Image
      id="abc-123"
      src="invalid.jpg"
      customFallbackSrc="custom_fallback_image.jpg"
      alt="a pic"
    />,
  );
  mockImage.onerror(); // invalid.jpg
  mockImage.onload(); // custom_fallback_image.jpg
  const image = screen.getByAltText('a pic');
  await waitFor(() =>
    expect(image).toHaveAttribute('src', 'custom_fallback_image.jpg'),
  );
});
