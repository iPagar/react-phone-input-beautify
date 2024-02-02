import clsx from 'clsx';
import React from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInputCountrySelect } from './phone-input-country-select-context';

export function PhoneInputTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { isDialogOpen, setIsDialogOpen, setTriggerRef, triggerRef } =
    usePhoneInputCountrySelect();

  const handleTogglePopover = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const { children, className } = props;

  return (
    <button
      {...props}
      className={clsx(styles.countrySelectTrigger, className)}
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
