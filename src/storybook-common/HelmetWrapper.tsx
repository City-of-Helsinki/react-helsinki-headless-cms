import React from 'react';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import { Helmet } from 'react-helmet-async';

export function HelmetWrapper({ children }: { children: React.ReactNode }) {
  return <Helmet>{children}</Helmet>;
}
