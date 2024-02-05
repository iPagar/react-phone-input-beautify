import clsx from 'clsx';
import React from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export function PhoneInputTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { onClick } = props;
  const { isDialogOpen, setIsDialogOpen, setTriggerRef, triggerRef } =
    usePhoneInput();

  const handleTogglePopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDialogOpen(!isDialogOpen);
    onClick?.(e);
  };

  const { children, className } = props;

  return (
    <button
      {...props}
      className={clsx(styles.phoneInputTrigger, className)}
      data-open={isDialogOpen}
      onClick={handleTogglePopover}
      ref={(ref) => {
        if (ref && !triggerRef?.current) {
          setTriggerRef({
            current: ref,
          });
        }
      }}
      type="button"
    >
      {children}
    </button>
  );
}

export function usePhoneInputTrigger() {
  return {
    triggerProps: {
      'aria-label': 'Select country',
      type: 'button',
    } as const,
  };
}
