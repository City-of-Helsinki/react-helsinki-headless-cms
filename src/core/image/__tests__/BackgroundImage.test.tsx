import React from 'react';
import { axe } from 'vitest-axe';
import { waitFor } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
import { BackgroundImage } from '../BackgroundImage';

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

test('renders BackgroundImage url without accessiblity violations', async () => {
  const { container } = render(<BackgroundImage id="45" url="valid.jpg" />);
  const { firstChild: image } = container;
  triggerLoad(); // valid.jpg
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
  triggerError(); // invalid.jpg
  triggerLoad(); // fallback_image.jpg
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
  triggerError(); // invalid.jpg
  triggerLoad(); // custom_fallback_image.jpg
  await waitFor(() =>
    expect(image).toHaveStyle(
      `background-image: url(custom_fallback_image.jpg);`,
    ),
  );
});
