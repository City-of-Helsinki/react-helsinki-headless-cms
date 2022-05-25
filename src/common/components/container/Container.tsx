import * as React from "react";

type ContainerProps = {
  children: JSX.Element | string;
  wrapper?: JSX.Element;
};

export default function Container({ wrapper, children }: ContainerProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return wrapper ? React.cloneElement(wrapper, [], children) : <>{children}</>;
}
