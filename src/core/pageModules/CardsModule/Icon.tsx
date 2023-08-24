import { IconAlertCircle } from 'hds-react';
import React from 'react';

type IconProps = {
  name: '1';
};

export function Icon({ name }: IconProps) {
  const icon = name === '1' ? <IconAlertCircle /> : null;
  return icon;
}
