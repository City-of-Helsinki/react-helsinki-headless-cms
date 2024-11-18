import type { ReactNode, HTMLAttributes } from 'react';
import React from 'react';

import styles from './text.module.scss';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'body-l'
  | 'body-xl';

type TextVariantProps = {
  /**
   * The render html element type for the text.
   */
  as?: string | React.ComponentType<HTMLAttributes<HTMLElement>>;
  /**
   * Text variant option.
   */
  variant?: TextVariant;
  /**
   * Additional classname for the text.
   */
  children: ReactNode;
  /**
   * Additional classname for the text.
   */
  className?: string;
  /**
   * Deprecated
   */
  role?: string;
};

function getElement(variant: TextVariant) {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
      return variant;
    case 'body':
    case 'body-l':
    default:
      return 'p';
  }
}

function Text({
  as,
  variant = 'body-l',
  children,
  className,
  ...rest
}: TextVariantProps) {
  return React.createElement(
    as || getElement(variant),
    {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: For some reason TS considers text to be undefined
      className: [styles.text, styles[variant], className].join(' '),
      ...rest,
    },
    children,
  );
}

export default Text;
