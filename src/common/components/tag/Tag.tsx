import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Tag as HDSTag } from 'hds-react';
import type { TagProps as HDSTagProps } from 'hds-react';

import styles from './tag.module.scss';
import { theme1, theme2 } from './tagThemes';

type Props = {
  /**
   *  Boolean indicating whether the tag has a featured style variant.
   */
  featured?: boolean;
  /**
   *  Boolean indicating whether the tag has a white-only style variant.
   */
  whiteOnly?: boolean;
  /**
   * Boolean indicating whether the tag has a selected style variant.
   */
  selected?: boolean;
  /**
   * White-space wrapping (Enabled by default in HDS v4, but disabled in this lib).
   */
  noTextWrap?: boolean;
  /**
   * onClick handler.
   */
  onClick?: () => void;
} & Pick<HDSTagProps, 'children' | 'className' | 'id' | 'role' | 'size'>;

export function Tag({
  className,
  children,
  featured,
  selected,
  whiteOnly,
  noTextWrap = false,
  onClick,
  id,
  ...hdsTagProps
}: Props) {
  /**
   * @deprecated the generatedId won't be needed after HDS removes the default value from the HDS Tag component:
   * https://github.com/City-of-Helsinki/helsinki-design-system/blob/master/packages/react/src/components/tag/Tag.tsx#L81).
   * */
  const generatedId = React.useId();

  return (
    <HDSTag
      onClick={onClick}
      {...(!onClick && { tabIndex: -1 })}
      theme={featured ? theme2 : theme1}
      className={classNames(
        styles.tag,
        featured && styles.featured,
        selected && styles.selected,
        whiteOnly && styles.whiteOnly,
        noTextWrap && styles.noTextWrap,
        onClick && !featured && styles.withHover,
        !onClick && styles.noOutline,
        className,
      )}
      {...hdsTagProps}
      // TODO: don't use the generatedId and allow an undefined id.
      id={id ?? `tag${generatedId}`}
    >
      {children}
    </HDSTag>
  );
}
