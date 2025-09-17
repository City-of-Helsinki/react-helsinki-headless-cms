import { Button, ButtonProps, ButtonVariant, LoadingSpinner } from 'hds-react';
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
      disabled={disabled}
      iconStart={iconStart}
      style={{ cursor: isLoading ? 'wait' : '' }}
    >
      {isLoading ? loadingText : children}
    </Button>
  );
}
