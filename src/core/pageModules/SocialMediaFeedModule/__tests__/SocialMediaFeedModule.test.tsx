import React from 'react';
import { render as plainRender, screen, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';

import { customRender as render } from '../../../../common/utils/customRender';
import { SocialMediaFeedModule } from '../SocialMediaFeedModule';
import { ConfigProvider } from '../../../configProvider/ConfigProvider';
import { defaultConfig } from '../../../configProvider/defaultConfig';

const trustedOrigins = ['https://plugins.flockler.com'];
const embedScript =
  '<div id="embed"></div><script src="https://plugins.flockler.com/embed/widget.js"></script>';
const config = { htmlSanitizer: { trustedOrigins, allowedUnsafeTags: [] } };

// Consumers commonly pass an inline config literal, so trustedOrigins is a
// fresh array identity on every render of the host.
function Host() {
  const [tick, rerender] = React.useReducer((count: number) => count + 1, 0);
  return (
    <>
      <button type="button" onClick={rerender}>
        rerender {tick}
      </button>
      <ConfigProvider
        config={{
          ...defaultConfig,
          htmlSanitizer: { allowedUnsafeTags: [], trustedOrigins },
        }}
      >
        <SocialMediaFeedModule anchor="feed" script={embedScript} />
      </ConfigProvider>
    </>
  );
}

describe('SocialMediaFeedModule', () => {
  it('loads a script from a trusted origin', () => {
    const { container } = render(
      <SocialMediaFeedModule anchor="feed" script={embedScript} />,
      undefined,
      config,
    );

    expect(
      container.querySelector(
        'script[src="https://plugins.flockler.com/embed/widget.js"]',
      ),
    ).toBeInTheDocument();
    // The embed target div must survive sanitization, otherwise the widget has
    // nothing to mount into.
    expect(container.querySelector('div#embed')).toBeInTheDocument();
  });

  it('does not load a script from an untrusted origin', () => {
    const { container } = render(
      <SocialMediaFeedModule
        anchor="feed"
        script='<script src="https://evil.example.com/widget.js"></script>'
      />,
      undefined,
      config,
    );

    expect(
      container.querySelector(
        'script[src="https://evil.example.com/widget.js"]',
      ),
    ).not.toBeInTheDocument();
  });

  it('does not render or execute an inline script without crashing', () => {
    (window as unknown as { xssMarker?: boolean }).xssMarker = false;

    expect(() =>
      render(
        <SocialMediaFeedModule
          anchor="feed"
          script="<script>window.xssMarker = true;</script>"
        />,
        undefined,
        config,
      ),
    ).not.toThrow();

    expect((window as unknown as { xssMarker?: boolean }).xssMarker).toBe(
      false,
    );

    delete (window as unknown as { xssMarker?: boolean }).xssMarker;
  });

  it('does not need a DOM during render, so it survives server rendering', () => {
    // Node has no DOMParser global and this library is published for Next.js
    // SSR/SSG, so nothing in the render phase may depend on it. renderToString
    // runs the render phase only, exactly like a server does.
    const realDOMParser = globalThis.DOMParser;
    // @ts-expect-error - simulating a DOM-less server environment
    delete globalThis.DOMParser;

    try {
      expect(() =>
        renderToString(
          <ConfigProvider
            config={{
              ...defaultConfig,
              htmlSanitizer: { allowedUnsafeTags: [], trustedOrigins },
            }}
          >
            <SocialMediaFeedModule anchor="feed" script={embedScript} />
          </ConfigProvider>,
        ),
      ).not.toThrow();
    } finally {
      globalThis.DOMParser = realDOMParser;
    }
  });

  it('does not inject the script again when the parent re-renders', () => {
    const { container } = plainRender(<Host />);
    expect(container.querySelectorAll('script')).toHaveLength(1);

    act(() => {
      screen.getByRole('button').click();
    });

    expect(container.querySelectorAll('script')).toHaveLength(1);
  });
});
