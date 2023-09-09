import React, { Suspense } from 'react';

import styles from '../pageModules.module.scss';

type IconProps = {
  name: string;
};

export function Icon({ name }: IconProps) {
  const IconComponent = React.lazy(() =>
    import('../../../common/components/icons').then((module) => ({
      default: module[name] || null,
    })),
  );
  return (
    <Suspense fallback={<div className={styles.fallbackIcon} />}>
      <IconComponent />
    </Suspense>
  );
}
