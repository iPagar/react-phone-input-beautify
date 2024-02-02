import clsx from 'clsx';
import React from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export function PhoneInputNumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  usePhoneInput();
  const { className } = props;

  return (
    <input
      {...props}
      className={clsx(styles.phoneInputNumberInput, className)}
    />
  );
}
