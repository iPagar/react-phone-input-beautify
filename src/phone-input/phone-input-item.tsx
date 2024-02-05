import clsx from 'clsx';
import React, { useCallback } from 'react';

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
      aria-selected={false}
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

// Расширение типов пропсов для хука
type UsePhoneInputItemProps = {
  selected: string;
};

export function usePhoneInputItem(props: UsePhoneInputItemProps) {
  const { selected } = props;

  return {
    getListItemProps: useCallback(
      (itemProps: { value: string }) => ({
        'aria-selected': selected === itemProps.value,
        role: 'option' as const,
      }),
      [selected]
    ),
  };
}
