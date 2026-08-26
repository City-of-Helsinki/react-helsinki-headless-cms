import React from 'react';

import { customRender as render } from '../../../common/utils/customRender';
import Hero from '../Hero';

/**
 * The Koros wave's fill is a CSS custom property chosen from three cases:
 * an image hero, an explicitly coloured hero, and the themed default.
 */
const korosStyle = (container: HTMLElement) =>
  container.querySelector('[style*="fill"]')?.getAttribute('style') ?? '';

describe('Hero koros fill', () => {
  it('uses white when the hero shows an image', () => {
    const { container } = render(
      <Hero id="hero" title="Hero title" imageUrl="/image.png" />,
    );

    expect(korosStyle(container)).toContain('var(--color-white)');
  });

  it('uses the given background colour when there is no image', () => {
    const { container } = render(
      <Hero id="hero" title="Hero title" backgroundColor="gold" />,
    );

    expect(korosStyle(container)).toContain('var(--color-gold)');
  });

  it('falls back to the themed hero background', () => {
    const { container } = render(<Hero id="hero" title="Hero title" />);

    expect(korosStyle(container)).toContain('var(--hcrc-color-hero-bg');
  });
});
