import React from 'react';
import { StepByStep } from 'hds-react';
import DOMPurify from 'isomorphic-dompurify';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from '../pageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import { getColor } from '../../utils/string';

export type Step = {
  content: string;
  title: string;
};

type StepsModuleProps = {
  steps?: Step[];
  title?: string;
  helpText?: string;
  color?: string;
  type?: string;
  className?: string;
};

export function StepsModule({
  title,
  helpText,
  color,
  steps,
  type,
  className,
}: StepsModuleProps) {
  return (
    <div className={styles.pageModuleWrapper}>
      <StepByStep
        numberedList={type === 'numbers'}
        className={classNames(
          color && colorStyles[`backgroundListItem${getColor(color)}`],
          className,
        )}
        helpText={DOMPurify.sanitize(helpText)}
        steps={steps?.map((step) => ({
          title: step.title,
          description: DOMPurify.sanitize(step.content),
        }))}
        title={title}
      />
    </div>
  );
}
