import React from 'react';

import Text from '../../text/Text';

export default function DefaultH2({ children }: { children: React.ReactNode }) {
  return <Text variant="h2">{children}</Text>;
}
