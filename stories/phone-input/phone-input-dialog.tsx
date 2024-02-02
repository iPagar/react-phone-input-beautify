import clsx from 'clsx';
import React, { useRef } from 'react';

import { useClickOutside } from './handle-click-outside';
import styles from './phone-input.module.scss';
import { usePhoneInputCountrySelect } from './phone-input-country-select-context';
import { usePhoneInput } from './phone-input-provider';

export function PhoneInputDialog(props: React.HTMLAttributes<HTMLDivElement>) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogPosition } = usePhoneInput();
  const { isDialogOpen, setIsDialogOpen, triggerRef } =
    usePhoneInputCountrySelect();
  useClickOutside([dialogRef, triggerRef], () => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    }
  });
  const { children, className } = props;

  if (!dialogPosition) return null;

  return (
    <div
      {...props}
      className={clsx(
        styles.countrySelectDialog,
        className,
        isDialogOpen && styles.countrySelectDialogOpen
      )}
      ref={dialogRef}
      style={{ top: dialogPosition.top }}
    >
      {children}
    </div>
  );
}
