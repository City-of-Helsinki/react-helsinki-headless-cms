import React, { useMemo } from 'react';
import DOMPurify, { Config } from 'isomorphic-dompurify';
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
  attributesToProps,
} from 'html-react-parser';
import 'hds-core/lib/components/table/table.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { isTrustedOrigin, validateTrustedOriginsFormat } from './utils';
import {
  DefaultH2,
  DefaultP,
  IframeForEmbeddedMedia,
} from './replaceComponents';

const WHITELISTED_TAGS = [
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
];

export const TABLE_VARIANTS = ['dark', 'dense', 'light', 'zebra'] as const;
export type TableVariant = (typeof TABLE_VARIANTS)[number];
export const DEFAULT_TABLE_VARIANTS: TableVariant[] = ['light'];

type Components = {
  p?: React.ComponentType<{ children: React.ReactNode }>;
  h2?: React.ComponentType<{ children: React.ReactNode }>;
  a?:
    | React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    | string;
  table?:
    | React.ComponentType<React.TableHTMLAttributes<HTMLTableElement>>
    | string;
  tableVariants?: TableVariant[];
  img?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>> | string;
  iframe?: React.ComponentType<React.IframeHTMLAttributes<HTMLIFrameElement>>;
};

export type HtmlToReactProps = {
  children: string;
  components?: Components;
  allowedUnsafeTags?: Config['ALLOWED_TAGS'];
  trustedOrigins?: string[];
};

/**
 * Inject HDS core table styles into children of <thead>
 * @see https://hds.hel.fi/components/table/code/
 */
function mapTableHeaderChild(domNode: DOMNode) {
  if ('attribs' in domNode && domNode.name === 'tr') {
    return (
      <tr
        {...attributesToProps(domNode.attribs)}
        className="hds-table__header-row"
      >
        {domToReact(domNode.children)}
      </tr>
    );
  }
  return domToReact([domNode]);
}

/**
 * Inject HDS core table styles into children of <table>
 * @see https://hds.hel.fi/components/table/code/
 */
function mapTableChild(domNode: DOMNode) {
  if ('attribs' in domNode) {
    switch (domNode.name) {
      case 'caption':
        return (
          <caption
            {...attributesToProps(domNode.attribs)}
            className="hds-table__caption"
          >
            {domToReact(domNode.children)}
          </caption>
        );

      case 'thead':
        return (
          <thead {...attributesToProps(domNode.attribs)}>
            {domNode.children.map((child) => mapTableHeaderChild(child))}
          </thead>
        );

      case 'tbody':
        return (
          <tbody
            {...attributesToProps(domNode.attribs)}
            className="hds-table__content"
          >
            {domToReact(domNode.children)}
          </tbody>
        );
      default:
        break;
    }
  }
  return domToReact([domNode]);
}

function replaceDomNodeWithReactComponent(
  domNode: DOMNode,
  options?: HTMLReactParserOptions,
  {
    p: P = DefaultP,
    h2: H2 = DefaultH2,
    a: A = 'a',
    table: Table = 'table',
    tableVariants = DEFAULT_TABLE_VARIANTS,
    img: IMG = 'img',
    iframe: IFrame = IframeForEmbeddedMedia,
  }: Components = {},
  trustedOrigins: HtmlToReactProps['trustedOrigins'] = [],
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
        // Inject HDS core table styles into <table> and its children,
        // see https://hds.hel.fi/components/table/code/
        return (
          <div className="hds-table-container">
            <Table
              {...attributesToProps(domNode.attribs)}
              className={classNames(
                'hds-table',
                tableVariants.map(
                  (tableVariant) => `hds-table--${tableVariant}`,
                ),
              )}
            >
              {domNode.children.map((child) => mapTableChild(child))}
            </Table>
          </div>
        );

      case 'img':
        return <IMG {...attributesToProps(domNode.attribs)} width="100%" />;

      case 'iframe':
        if (isTrustedOrigin(domNode.attribs.src, trustedOrigins)) {
          return <IFrame {...attributesToProps(domNode.attribs)} />;
        }
        // eslint-disable-next-line no-console
        console.warn(
          'The iframe src-attribute was not set to any of the trusted origins.',
        );
        return <div />;

      default:
        break;
    }
  }

  return domNode;
}

export function HtmlToReact({
  children: dirty,
  components,
  allowedUnsafeTags = [],
  trustedOrigins = [],
}: HtmlToReactProps) {
  validateTrustedOriginsFormat(trustedOrigins);
  const clean = useMemo(
    () =>
      DOMPurify.sanitize(dirty, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ['target'],
        ADD_TAGS: allowedUnsafeTags,
        ALLOWED_TAGS: WHITELISTED_TAGS,
      }),
    [dirty, allowedUnsafeTags],
  );
  const htmlReactParserOptions = {
    replace: (domNode) =>
      replaceDomNodeWithReactComponent(
        domNode,
        htmlReactParserOptions,
        components,
        trustedOrigins,
      ),
  };

  return <>{parse(clean, htmlReactParserOptions)}</>;
}
