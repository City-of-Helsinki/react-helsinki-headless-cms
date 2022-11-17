import React, { useMemo } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
  attributesToProps,
} from 'html-react-parser';

import Text from '../text/Text';

type Components = {
  p?: React.ComponentType<{ children: React.ReactNode }>;
  h2?: React.ComponentType<{ children: React.ReactNode }>;
  a?:
    | React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    | string;
  table?:
    | React.ComponentType<React.TableHTMLAttributes<HTMLTableElement>>
    | string;
  img?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>> | string;
};

type HtmlToReactProps = {
  children: string;
  components?: Components;
};

function DefaultP({ children }: { children: React.ReactNode }) {
  return <Text variant="body-l">{children}</Text>;
}

function DefaultH2({ children }: { children: React.ReactNode }) {
  return <Text variant="h2">{children}</Text>;
}

function replaceDomNodeWithReactComponent(
  domNode: DOMNode,
  options?: HTMLReactParserOptions,
  {
    p: P = DefaultP,
    h2: H2 = DefaultH2,
    a: A = 'a',
    table: Table = 'table',
    img: IMG = 'img',
  }: Components = {},
) {
  // html-react-parser advices to do an instanceof check
  // domNode instanceof Element
  // However, this will fail between contexts. As this code is meant to be used
  // as a dependency, different contexts are likely.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_e.g._frames_or_windows

  if ('attribs' in domNode) {
    switch (domNode.name) {
      case 'p':
        return (
          <P {...attributesToProps(domNode.attribs)}>
            {domToReact(domNode.children, options)}
          </P>
        );

      case 'h2':
        return (
          <H2 {...attributesToProps(domNode.attribs)}>
            {domToReact(domNode.children)}
          </H2>
        );

      case 'a':
        return (
          <A {...attributesToProps(domNode.attribs)}>
            {domToReact(domNode.children)}
          </A>
        );

      case 'table':
        return (
          <Table
            {...attributesToProps(domNode.attribs)}
            style={{ width: '100%' }}
          >
            {domToReact(domNode.children)}
          </Table>
        );

      case 'img':
        return <IMG {...attributesToProps(domNode.attribs)} width="100%" />;

      default:
        break;
    }
  }

  return domNode;
}

export function HtmlToReact({ children: dirty, components }: HtmlToReactProps) {
  const clean = useMemo(
    () =>
      DOMPurify.sanitize(dirty, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ['target'],
        ALLOWED_TAGS: [
          // Content sectioning
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',

          // Text content
          'blockquote',
          'dd',
          'dl',
          'dt',
          'figcaption',
          'figure',
          'hr',
          'li',
          'ol',
          'p',
          'pre',
          'ul',

          // Inline text semantics
          'a',
          'abbr',
          'b',
          'bdi',
          'bdo',
          'br',
          'cite',
          'code',
          'data',
          'dfn',
          'em',
          'i',
          'kdb',
          'mark',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'small',
          'span',
          'strong',
          'sub',
          'sup',
          'time',
          'u',
          'var',
          'wbr',

          // Image and multimedia
          'area',
          'audio',
          'img',
          'map',
          'track',
          'video',

          // SVG and MathML
          'svg',
          'math',
        ],
      }),
    [dirty],
  );
  const htmlReactParserOptions = {
    replace: (domNode) =>
      replaceDomNodeWithReactComponent(
        domNode,
        htmlReactParserOptions,
        components,
      ),
  };

  return <>{parse(clean, htmlReactParserOptions)}</>;
}
