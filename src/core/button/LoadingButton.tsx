import type { ButtonProps } from 'hds-react';
import { Button, ButtonVariant, LoadingSpinner } from 'hds-react';
import React from 'react';

type LoadingButtonProps = Omit<ButtonProps, 'iconStart' | 'variant'> & {
  isLoading: boolean;
  loadingText?: React.ReactNode & string;
};

export function LoadingButton({
  children,
  isLoading,
  loadingText,
  ...rest
}: LoadingButtonProps) {
  const disabled = isLoading ? true : rest.disabled;
  const iconStart = isLoading ? <LoadingSpinner small /> : null;
  const variant = isLoading ? ButtonVariant.Clear : ButtonVariant.Primary;

  return (
    <Button
      {...rest}
      variant={variant}
      disabled={disabled || isLoading}
      iconStart={iconStart}
      style={{ cursor: isLoading ? 'wait' : '' }}
    >
      {isLoading ? String(loadingText) : String(children)}
    </Button>
  );
}
