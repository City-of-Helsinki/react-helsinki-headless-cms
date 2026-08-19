import { getColor, getIconName, getTextFromHtml, isWhiteText } from '../string';

describe('getTextFromHtml', () => {
  it('strips HTML tags and decodes entities', () => {
    expect(getTextFromHtml('<p>Hello &amp; welcome</p>')).toBe(
      'Hello & welcome',
    );
  });

  it('leaves plain text untouched', () => {
    expect(getTextFromHtml('Hello world')).toBe('Hello world');
  });

  it('drops trailing unterminated tags', () => {
    expect(getTextFromHtml('Hello <span')).toBe('Hello ');
  });

  it('completes in linear time for a long run of unmatched "<" characters', () => {
    const html = '<'.repeat(200000);

    const start = performance.now();
    getTextFromHtml(html);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(1000);
  });
});

describe('getColor', () => {
  it('converts a kebab-case color to PascalCase', () => {
    expect(getColor('coat-of-arms')).toBe('CoatOfArms');
  });
});

describe('getIconName', () => {
  it('prepends icon- and converts to PascalCase', () => {
    expect(getIconName('alert')).toBe('IconAlert');
  });
});

describe('isWhiteText', () => {
  it('returns true for light select colors', () => {
    expect(isWhiteText('brick')).toBe(true);
  });

  it('returns false for other colors', () => {
    expect(isWhiteText('unknown')).toBe(false);
  });
});
