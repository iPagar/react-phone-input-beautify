import clsx from 'clsx';
import React from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInputCountrySelect } from './phone-input-country-select-context';

export function PhoneInputItem(props: React.LiHTMLAttributes<HTMLLIElement>) {
  const { children, className, onClick, onKeyDown, value } = props;
  const { setIsDialogOpen } = usePhoneInputCountrySelect();

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick?.(e);

    setIsDialogOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      onKeyDown?.(event);

      setIsDialogOpen(false);
    }
  };

  return (
    <li
      {...props}
      aria-selected="false"
      className={clsx(styles.countrySelectItem, className)}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      role="option"
      value={value}
    >
      {children}
    </li>
  );
}
