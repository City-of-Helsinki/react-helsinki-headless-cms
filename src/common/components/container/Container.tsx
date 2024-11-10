import * as React from 'react';

type ContainerProps = {
  /**
   * Additional children to render inside the container.
   */
  children: JSX.Element | string;
  /**
   * Optional wrapper element for the container.
   */
  wrapper?: JSX.Element;
};

export default function Container({ wrapper, children }: ContainerProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return wrapper ? React.cloneElement(wrapper, [], children) : <>{children}</>;
}
