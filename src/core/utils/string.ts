import { camelCase, startCase } from 'lodash-es';
import { decode } from 'html-entities';

export const SELECT_COLORS_LIGHT = ['coat-of-arms', 'brick', 'bus', 'tram'];

// Helper to convert strings like 'coat-of-arms' to 'CoatOfArms'
const toPascalCase = (s: string): string =>
  startCase(camelCase(s)).replace(/\s/g, '');

/**
 * Converts a string (e.g., 'coat-of-arms') into PascalCase (e.g., 'CoatOfArms').
 * @param {string} color The color string to convert.
 * @returns {string} The color string in PascalCase format.
 */
export const getColor = (color: string): string => toPascalCase(color);

/**
 * Prepends 'icon-' to a name and converts it to PascalCase (e.g., 'icon-alert' to 'IconAlert').
 * @param {string} name The icon name part.
 * @returns {string} The icon name in PascalCase format.
 */
export const getIconName = (name: string): string =>
  toPascalCase(`icon-${name}`);

/**
 * Strips all HTML tags from a string and decodes HTML entities.
 * Scans the string linearly instead of using a regex, since an unanchored
 * `/<[^>]*>/g` backtracks per start position and is O(n^2) on malformed
 * input (e.g. a long run of `<` with no matching `>`).
 *
 * @param {string} html The input string containing HTML markup.
 * @returns {string} The resulting text string with all HTML tags removed and entities decoded.
 */
export const getTextFromHtml = (html: string): string => {
  let text = '';
  let i = 0;

  while (i < html.length) {
    const tagStart = html.indexOf('<', i);
    if (tagStart === -1) {
      text += html.slice(i);
      break;
    }
    text += html.slice(i, tagStart);

    const tagEnd = html.indexOf('>', tagStart);
    if (tagEnd === -1) {
      text += html.slice(tagStart);
      break;
    }
    i = tagEnd + 1;
  }

  return decode(text);
};

/**
 * Checks if the text color should be white based on the background color.
 * @param {string} color The background color string.
 * @returns {boolean} True if white text should be used, false otherwise.
 */
export const isWhiteText = (color: string): boolean =>
  SELECT_COLORS_LIGHT.includes(color);
