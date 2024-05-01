import clsx from 'clsx';
import React, { forwardRef, useEffect, useRef } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export const PhoneInputNumberInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { props: phoneProps, state } = usePhoneInput();
  const { className, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  // Объединение ref и синхронизация внешнего и внутреннего ref
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(inputRef.current);
    } else if (ref) {
      // eslint-disable-next-line no-param-reassign
      ref.current = inputRef.current;
    }
  }, [ref]);

  // Обработчик изменений, который обновляет состояние
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = state.handlePhoneNumberChange(e.target.value);
    e.target.value = formattedNumber ?? '';
    props.onChange?.(e);
  };

  return (
    <input
      {...otherProps}
      {...phoneProps.numberInputProps}
      className={clsx(phoneProps.numberInputProps.className, className)}
      onChange={handleChange}
      ref={inputRef}
    />
  );
});

function PhoneInputWithForm(
  props: UseControllerProps & React.InputHTMLAttributes<HTMLInputElement>
) {
  const {
    field: { ref: inputRef, ...inputProps },
    formState,
  } = useController(props);
  const { state } = usePhoneInput();

  // Optionally, handle reset logic here by checking if field is not dirty
  useEffect(() => {
    if (!formState.isDirty) {
      state.handlePhoneNumberChange('');
    }
  }, [formState.isDirty]);

  return <PhoneInputNumberInput {...props} {...inputProps} ref={inputRef} />;
}

export default PhoneInputWithForm;

export function usePhoneInputNumberInput() {
  return {
    numberInputProps: {
      className: styles.phoneInputNumberInput,
      type: 'tel',
    },
  };
}
