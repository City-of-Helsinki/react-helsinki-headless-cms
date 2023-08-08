import React from 'react';
import { StepByStep } from 'hds-react';
import DOMPurify from 'isomorphic-dompurify';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import styles from '../pageModules.module.scss';

type Step = {
  content: string;
  title: string;
};

export type StepsModuleProps = {
  steps: Step[];
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
    <StepByStep
      numberedList={type === 'numbers'}
      className={classNames(
        color ? styles[`backgroundListItem${color}`] : '',
        className,
      )}
      helpText={DOMPurify.sanitize(helpText)}
      steps={steps.map((step) => ({
        title: step.title,
        description: DOMPurify.sanitize(step.content),
      }))}
      title={title}
    />
  );
}
