import React, { Suspense } from 'react';

import styles from '../pageModules.module.scss';

type IconProps = {
  name: string;
};

export function Icon({ name }: IconProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const fallback = () => <div />;
  const IconComponent = React.useMemo(
    () =>
      React.lazy(() =>
        import('../../../common/components/icons').then((module) => ({
          default: module[name] || fallback,
        })),
      ),
    [name],
  );
  return (
    <Suspense fallback={<div className={styles.fallbackIcon} />}>
      <IconComponent />
    </Suspense>
  );
}
