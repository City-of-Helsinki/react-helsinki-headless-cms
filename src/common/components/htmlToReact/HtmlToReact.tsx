import React, { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
  attributesToProps,
} from "html-react-parser";

import Text from "../text/Text";

type Components = {
  p?: React.ComponentType<{ children: React.ReactNode }>;
  h2?: React.ComponentType<{ children: React.ReactNode }>;
  a?:
    | React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    | string;
};

type Props = {
  children: string;
  components?: Components;
};

function DefaultP({ children }: { children: React.ReactNode }) {
  return <Text variant="body">{children}</Text>;
}

function DefaultH2({ children }: { children: React.ReactNode }) {
  return <Text variant="h2">{children}</Text>;
}

function replaceDomNodeWithReactComponent(
  domNode: DOMNode,
  options?: HTMLReactParserOptions,
  { p: P = DefaultP, h2: H2 = DefaultH2, a: A = "a" }: Components = {}
) {
  if (domNode instanceof Element && domNode.name === "p") {
    return (
      <P {...attributesToProps(domNode.attribs)}>
        {domToReact(domNode.children, options)}
      </P>
    );
  }

  if (domNode instanceof Element && domNode.name === "h2") {
    return (
      <H2 {...attributesToProps(domNode.attribs)}>
        {domToReact(domNode.children)}
      </H2>
    );
  }

  if (domNode instanceof Element && domNode.name === "a") {
    return (
      <A {...attributesToProps(domNode.attribs)}>
        {domToReact(domNode.children)}
      </A>
    );
  }

  return domNode;
}

export default function HtmlToReact({ children: dirty, components }: Props) {
  const clean = useMemo(
    () =>
      DOMPurify.sanitize(dirty, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ["target"],
        ALLOWED_TAGS: [
          // Content sectioning
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",

          // Text content
          "blockquote",
          "dd",
          "dl",
          "dt",
          "figcaption",
          "figure",
          "hr",
          "li",
          "ol",
          "p",
          "pre",
          "ul",

          // Inline text semantics
          "a",
          "abbr",
          "b",
          "bdi",
          "bdo",
          "br",
          "cite",
          "code",
          "data",
          "dfn",
          "em",
          "i",
          "kdb",
          "mark",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "time",
          "u",
          "var",
          "wbr",

          // Image and multimedia
          "area",
          "audio",
          "img",
          "map",
          "track",
          "video",

          // SVG and MathML
          "svg",
          "math",
        ],
      }),
    [dirty]
  );
  const htmlReactParserOptions = {
    replace: (domNode) =>
      replaceDomNodeWithReactComponent(
        domNode,
        htmlReactParserOptions,
        components
      ),
  };

  return <>{parse(clean, htmlReactParserOptions)}</>;
}
