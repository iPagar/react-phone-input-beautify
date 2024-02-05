import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export const PhoneInputNumberInput = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { props: phoneProps, state } = usePhoneInput();
    const { className } = props;

    return (
      <input
        ref={ref}
        {...props}
        {...phoneProps.numberInputProps}
        className={clsx(phoneProps.numberInputProps.className, className)}
        onChange={(e) => {
          const formattedNumber = state.handlePhoneNumberChange(e.target.value);
          e.target.value = formattedNumber;
          props.onChange?.(e);
        }}
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
