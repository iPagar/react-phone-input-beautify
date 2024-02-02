import clsx from 'clsx';
import React, { HTMLAttributes, useEffect } from 'react';

import styles from './phone-input.module.scss';
import { PhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem } from './phone-input-item';
import {
  PhoneInputContextProvider,
  usePhoneInput,
} from './phone-input-provider';
import { PhoneInputTrigger } from './phone-input-trigger';
import { PhoneInputCountrySelect } from './phoneinput-country-select';

function PhoneInputDiv(props: React.HTMLAttributes<HTMLDivElement>) {
  const { phoneInputRef, setDialogPosition, setPhoneInputRef } =
    usePhoneInput();
  const { className } = props;

  useEffect(() => {
    if (phoneInputRef?.current) {
      const triggerRect = phoneInputRef.current.getBoundingClientRect();
      // Calculate the top position of the dialog
      const popoverTop = triggerRect.height;

      setDialogPosition({ top: popoverTop });
    }
  }, [phoneInputRef]);

  return (
    <div
      {...props}
      className={clsx(styles.phoneInput, className)}
      ref={(ref) => {
        if (ref && !phoneInputRef?.current) {
          setPhoneInputRef({
            current: ref,
          });
        }
      }}
    />
  );
}
export function PhoneInput(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <PhoneInputContextProvider>
      <PhoneInputDiv {...props}>{children}</PhoneInputDiv>
    </PhoneInputContextProvider>
  );
}

PhoneInput.NumberInput = function PhoneInputNumberInput(
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
};

PhoneInput.CountrySelect = PhoneInputCountrySelect;
PhoneInput.Trigger = PhoneInputTrigger;
PhoneInput.Dialog = PhoneInputDialog;
PhoneInput.Item = PhoneInputItem;
