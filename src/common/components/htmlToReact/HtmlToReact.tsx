import React, { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";

import Text from "../text/Text";

type Components = {
  p?: React.ComponentType<{ children: React.ReactNode }>;
  h2?: React.ComponentType<{ children: React.ReactNode }>;
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
  { p: P = DefaultP, h2: H2 = DefaultH2 }: Components = {}
) {
  if (domNode instanceof Element && domNode.name === "p") {
    return <P>{domToReact(domNode.children)}</P>;
  }

  if (domNode instanceof Element && domNode.name === "h2") {
    return <H2>{domToReact(domNode.children)}</H2>;
  }

  return domNode;
}

export default function HtmlToReact({ children: dirty, components }: Props) {
  const clean = useMemo(
    () =>
      DOMPurify.sanitize(dirty, {
        USE_PROFILES: { html: true },
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

  return (
    <>
      {parse(clean, {
        replace: (domNode) =>
          replaceDomNodeWithReactComponent(domNode, components),
      })}
    </>
  );
}
