/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';

import { configContext } from './configContext';

export function useConfig() {
  return useContext(configContext);
}
