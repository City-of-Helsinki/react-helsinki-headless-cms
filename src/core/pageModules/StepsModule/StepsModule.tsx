import React from 'react';
import { StepByStep } from 'hds-react';
import classNames from 'classnames';

import styles from '../pageModules.module.scss';
import colorStyles from '../../styles/background.module.scss';
import { getColor, getTextFromHtml, isWhiteText } from '../../utils/string';
import createHashKey from '../../utils/createHashKey';

export type Step = {
  content: string;
  title: string;
};

export type StepsModuleProps = {
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
  const stepsContents = steps?.map((step, index) => {
    // The card module does not contain any proeprty that could be used as an unique id, so one needs to be created
    const uniqueKey = createHashKey(`${index}-${step.title}-${step.content}`);
    return {
      key: uniqueKey,
      title: getTextFromHtml(step.title),
      description: getTextFromHtml(step.content),
    };
  });

  return (
    <div className={styles.pageModuleWrapper}>
      <StepByStep
        numberedList={type === 'numbers'}
        className={classNames(
          color && colorStyles[`backgroundListItem${getColor(color)}`],
          color && isWhiteText(color) && colorStyles.whiteTextList,
          styles.stepsContainer,
          className,
        )}
        helpText={getTextFromHtml(helpText ?? '')}
        steps={stepsContents ?? []}
        title={title}
      />
    </div>
  );
}
