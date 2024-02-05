import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export const PhoneInputNumberInput = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    usePhoneInput();
    const { className } = props;

    return (
      <input
        ref={ref}
        {...props}
        className={clsx(styles.phoneInputNumberInput, className)}
      />
    );
  }
);

export function usePhoneInputNumberInput() {
  return {
    numberInputProps: {
      className: styles.phoneInputNumberInput,
      type: 'tel',
    },
  };
}
