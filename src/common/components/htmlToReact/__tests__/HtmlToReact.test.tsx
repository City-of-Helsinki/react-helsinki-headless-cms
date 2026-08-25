import React from 'react';
import { render } from '@testing-library/react';

import { HtmlToReact } from '../HtmlToReact';

const trustedOrigins = ['https://www.youtube.com'];

function renderHtml(html: string) {
  return render(
    <HtmlToReact allowedUnsafeTags={['iframe']} trustedOrigins={trustedOrigins}>
      {html}
    </HtmlToReact>,
  );
}

describe('HtmlToReact iframe origin check', () => {
  // A CMS editor can author any of these. They used to throw 'TypeError:
  // Invalid URL' out of isTrustedOrigin and crash the page for every visitor.
  it.each([
    ['no src at all', '<iframe title="x"></iframe>'],
    ['a relative src', '<iframe src="/embeds/video"></iframe>'],
    ['a protocol-relative src', '<iframe src="//evil.test/x"></iframe>'],
    ['a garbage src', '<iframe src="not a url"></iframe>'],
  ])('renders without crashing for an iframe with %s', (_name, html) => {
    const { container } = renderHtml(html);
    // Fails closed: the iframe is dropped rather than rendered.
    expect(container.querySelector('iframe')).not.toBeInTheDocument();
  });

  it('still renders an iframe from a trusted origin', () => {
    const { container } = renderHtml(
      '<iframe src="https://www.youtube.com/embed/abc"></iframe>',
    );
    expect(container.querySelector('iframe')).toBeInTheDocument();
  });
});
