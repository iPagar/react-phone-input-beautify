import clsx from 'clsx';
import React, { useCallback } from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export function PhoneInputItem(
  props: React.LiHTMLAttributes<HTMLLIElement> & {
    country: string;
  }
) {
  const { children, className, country, onClick, onKeyDown } = props;
  const {
    props: { getListItemProps },
    setIsDialogOpen,
    state,
  } = usePhoneInput();

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    state.handleCountryChange(country);

    onClick?.(e);

    setIsDialogOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      state.handleCountryChange(country);

      onKeyDown?.(event);

      setIsDialogOpen(false);
    }
  };

  const itemProps = getListItemProps({
    value: country,
  });

  return (
    <li
      {...props}
      {...itemProps}
      aria-controls={country}
      className={clsx(styles.countrySelectItem, className)}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
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
        'aria-controls': itemProps.value,
        'aria-selected': selected === itemProps.value,
        role: 'option' as const,
      }),
      [selected]
    ),
  };
}
