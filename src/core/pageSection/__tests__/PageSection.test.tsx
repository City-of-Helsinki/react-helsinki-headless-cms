import React from 'react';
import { axe } from 'vitest-axe';
import { waitFor } from '@testing-library/react';

import { customRender as render } from '../../../common/utils/customRender';
import { PageSection } from '../PageSection';

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
  // globalThis.Image is what `new Image()` resolves to in production code
  globalThis.Image = window.Image;
});

afterEach(() => {
  window.Image = originalImage;
  globalThis.Image = originalImage;
});

test('renders image url without accessiblity violations', async () => {
  const { container } = render(
    <PageSection backgroundImageUrl="valid.jpg">Hello</PageSection>,
  );
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
  } = render(
    <PageSection backgroundImageUrl="invalid.jpg">Hello</PageSection>,
    undefined,
    {
      fallbackImageUrls: ['fallback_image.jpg'],
    },
  );
  triggerError(); // invalid.jpg — listeners cleaned up via AbortSignal
  triggerLoad(); // fallback_image.jpg
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
