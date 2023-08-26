import React, { Suspense } from 'react';

import styles from '../pageModules.module.scss';

type IconProps = {
  name: string;
};

export function Icon({ name }: IconProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const fallback = () => <div className={styles.fallbackIcon} />;
  const IconComponent = React.lazy(() =>
    import('../../../common/components/icons').then((module) => ({
      default: module[name] || fallback,
    })),
  );
  return (
    <Suspense fallback={<div className={styles.fallbackIcon} />}>
      <IconComponent />
    </Suspense>
  );
}
