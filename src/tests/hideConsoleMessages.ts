import util from 'node:util';

export const consoleLevels = ['debug', 'info', 'log', 'warn', 'error'] as const;
export type ConsoleLevel = (typeof consoleLevels)[number];

/**
 * Set up console method overrides to hide the given console messages.
 * @param consoleMessagesToHide - An object mapping console levels to arrays of RegExp patterns or strings.
 * Each pattern or strings represents a message to be hidden for that console level.
 * If a string is given, any message that includes that string will be hidden.
 * If a RegExp is given, any message that matches that RegExp will be hidden.
 * If no patterns are provided for a level, no messages will be hidden for that level.
 */
export const hideConsoleMessages = (
  consoleMessagesToHide: Partial<Record<ConsoleLevel, (RegExp | string)[]>>,
) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const consoleLevel of consoleLevels) {
    const hidablePatterns = consoleMessagesToHide[consoleLevel];
    if (hidablePatterns && hidablePatterns.length > 0) {
      // eslint-disable-next-line no-console
      const originalConsoleMethod = console[consoleLevel];
      // eslint-disable-next-line no-console, func-names
      console[consoleLevel] = function (msg, ...optionalParams) {
        const formattedMsg = util.format(msg, ...optionalParams);
        const shouldHide = hidablePatterns.some((pattern) =>
          typeof pattern === 'string'
            ? formattedMsg.includes(pattern)
            : pattern.test(formattedMsg),
        );
        if (shouldHide) {
          return;
        }
        // eslint-disable-next-line consistent-return
        return originalConsoleMethod(msg, ...optionalParams);
      };
    }
  }
};
