import clsx from 'clsx';
import React, { forwardRef, useEffect, useRef } from 'react';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

export const PhoneInputNumberInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { props: phoneProps, state } = usePhoneInput();
  const { className, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>(null); // Создаем свой локальный ref

  // Синхронизируем переданный ref с локальным ref
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(inputRef.current);
      } else {
        // eslint-disable-next-line no-param-reassign
        ref.current = inputRef.current;
      }
    }
  }, [ref]);

  // Флаг для предотвращения бесконечного цикла
  const formatting = useRef(false);

  useEffect(() => {
    const inputElement = inputRef.current;

    if (!inputElement) {
      return;
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'value'
        ) {
          // Проверяем, не мы ли вызвали это изменение
          if (!formatting.current) {
            const formattedNumber = state.handlePhoneNumberChange(
              inputElement.value
            );
            inputElement.value = formattedNumber;

            formatting.current = false; // Сбрасываем флаг
          }
        }
      });
    });

    observer.observe(inputElement, {
      attributeFilter: ['value'],
      attributes: true,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [inputRef, props.onChange]);

  return (
    <input
      {...otherProps}
      {...phoneProps.numberInputProps}
      className={clsx(phoneProps.numberInputProps.className, className)}
      name={props.name}
      onChange={(e) => {
        formatting.current = true;
        const formattedNumber = state.handlePhoneNumberChange(e.target.value);

        e.target.value = formattedNumber;
        props.onChange?.(e);
        formatting.current = false;
      }}
      ref={inputRef}
      value={props.value}
    />
  );
});

export function usePhoneInputNumberInput() {
  return {
    numberInputProps: {
      className: styles.phoneInputNumberInput,
      type: 'tel',
    },
  };
}
