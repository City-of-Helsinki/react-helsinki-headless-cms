import React, { useMemo } from 'react';
import type { Config } from 'isomorphic-dompurify';
import DOMPurify from 'isomorphic-dompurify';
import type {
  DOMNode,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser';
import parse, { domToReact, attributesToProps } from 'html-react-parser';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from './htmlToReact.module.scss';
import {
  DefaultH2,
  DefaultP,
  IframeForEmbeddedMedia,
} from './replaceComponents';
import validateTrustedOriginsFormat from '../../../core/utils/validateTrustedOriginsFormat';
import isTrustedOrigin from '../../../core/utils/isTrustedOrigin';

const hasClassName = (domNode: Element, className: string) =>
  domNode.attribs.class?.split(/\s+/)?.includes(className) ?? false;

const addClassNames = (
  domNode: Element,
  ...newClassNames: (string | string[] | Record<string, boolean>)[]
) =>
  classNames(...(domNode.attribs.class?.split(/\s+/) ?? []), ...newClassNames);

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

export const TABLE_VARIANTS = [
  'dark',
  'dense',
  'light',
  'with-vertical-lines',
  'zebra',
] as const;
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
function mapTableHeaderChild(
  domNode: DOMNode,
  options?: HTMLReactParserOptions,
) {
  if ('attribs' in domNode && domNode.name === 'tr') {
    return (
      <tr
        {...attributesToProps(domNode.attribs)}
        className={addClassNames(domNode, styles['hds-table__header-row'])}
      >
        {domToReact(domNode.children as DOMNode[], options)}
      </tr>
    );
  }
  return domToReact([domNode], options);
}

function replaceDomNodeWithReactComponent(
  domNode: DOMNode,
  options?: HTMLReactParserOptions,
  components: Components = {},
  trustedOrigins: HtmlToReactProps['trustedOrigins'] = [],
) {
  const {
    p: P = DefaultP,
    h2: H2 = DefaultH2,
    a: A = 'a',
    table: Table = 'table',
    tableVariants = DEFAULT_TABLE_VARIANTS,
    img: IMG = 'img',
    iframe: IFrame = IframeForEmbeddedMedia,
  } = components;

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
            {domToReact(domNode.children as DOMNode[], options)}
          </P>
        );

      case 'h2':
        return (
          <H2 {...attributesToProps(domNode.attribs)}>
            {domToReact(domNode.children as DOMNode[], options)}
          </H2>
        );

      case 'a':
        return (
          <A {...attributesToProps(domNode.attribs)}>
            {domToReact(domNode.children as DOMNode[], options)}
          </A>
        );

      case 'figure':
        // Inject HDS core zebra table style into <table> if it's inside
        // <figure class="is-style-stripes">,
        // see https://hds.hel.fi/components/table/code/
        return (
          <figure
            {...attributesToProps(domNode.attribs)}
            className={addClassNames(domNode, {
              [styles['striped-figure']]: hasClassName(
                domNode,
                'is-style-stripes',
              ),
            })}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </figure>
        );

      case 'table':
        // Inject HDS core table styles into <table> and its children,
        // see https://hds.hel.fi/components/table/code/
        return (
          <div
            className={addClassNames(domNode, styles['hds-table-container'])}
          >
            <Table
              {...attributesToProps(domNode.attribs)}
              className={addClassNames(
                domNode,
                styles['hds-table'],
                tableVariants.map(
                  (tableVariant) => styles[`hds-table--${tableVariant}`],
                ),
              )}
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </Table>
          </div>
        );

      case 'caption':
        return (
          <caption
            {...attributesToProps(domNode.attribs)}
            className={addClassNames(domNode, styles['hds-table__caption'])}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </caption>
        );

      case 'thead':
        return (
          <thead {...attributesToProps(domNode.attribs)}>
            {(domNode.children as DOMNode[]).map((child) =>
              mapTableHeaderChild(child, options),
            )}
          </thead>
        );

      case 'tbody':
        return (
          <tbody
            {...attributesToProps(domNode.attribs)}
            className={addClassNames(domNode, styles['hds-table__content'])}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </tbody>
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
