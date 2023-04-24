import React from 'react';

import Text from '../../text/Text';

export default function DefaultP({ children }: { children: React.ReactNode }) {
  return <Text variant="body-l">{children}</Text>;
}
