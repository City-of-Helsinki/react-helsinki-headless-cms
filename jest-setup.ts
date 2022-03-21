// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom";

import { TextDecoder, TextEncoder } from "util";

// Add for isomorphic-dompurify
// https://github.com/kkomelin/isomorphic-dompurify/issues/91#issuecomment-1012645198
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
