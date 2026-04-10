import React from 'react';
import { axe } from 'vitest-axe';
import { screen, waitFor } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
import { Image } from '../Image';

type EventCallback = (event: Event) => void;

let loadListeners: EventCallback[] = [];
let errorListeners: EventCallback[] = [];

const mockImage = {
  src: null as string | null,
  addEventListener(
    event: string,
    cb: EventCallback,
    options?: AddEventListenerOptions | boolean,
  ) {
    if (event === 'load') loadListeners.push(cb);
    if (event === 'error') errorListeners.push(cb);
    const signal = typeof options === 'object' ? options?.signal : undefined;
    if (signal) {
      signal.addEventListener('abort', () =>
        mockImage.removeEventListener(event, cb),
      );
    }
  },
  removeEventListener(event: string, cb: EventCallback) {
    if (event === 'load') loadListeners = loadListeners.filter((l) => l !== cb);
    if (event === 'error')
      errorListeners = errorListeners.filter((l) => l !== cb);
  },
};

const triggerLoad = () =>
  [...loadListeners].forEach((cb) => cb(new Event('load')));
const triggerError = () =>
  [...errorListeners].forEach((cb) => cb(new Event('error')));

const originalImage = window.Image;
beforeEach(() => {
  loadListeners = [];
  errorListeners = [];
  // Must be a regular function (not arrow) so `new Image()` works
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line func-names
  window.Image = function () {
    return mockImage;
  };
});

afterEach(() => {
  window.Image = originalImage;
});

test('renders image src without accessiblity violations', async () => {
  const { container } = render(<Image id="45" src="valid.jpg" alt="a pic" />);

  triggerLoad(); // valid.jpg
  const image = screen.getByAltText('a pic');
  await waitFor(() => expect(image).toHaveAttribute('src', 'valid.jpg'));
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('renders fallback image url from app configuration', async () => {
  render(<Image id="45" src="invalid.jpg" alt="a pic" />, undefined, {
    fallbackImageUrls: ['fallback_image.jpg'],
  });
  triggerError(); // invalid.jpg
  triggerLoad(); // fallback_image.jpg
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
  triggerError(); // invalid.jpg
  triggerLoad(); // custom_fallback_image.jpg
  const image = screen.getByAltText('a pic');
  await waitFor(() =>
    expect(image).toHaveAttribute('src', 'custom_fallback_image.jpg'),
  );
});
