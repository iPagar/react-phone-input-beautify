import React, { HTMLAttributes } from 'react';

import { PhoneInputCountrySelect } from './phone-input-country-select';
import { PhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem } from './phone-input-item';
import { PhoneInputNumberInput } from './phone-input-number-input';
import { PhoneInputContextProvider } from './phone-input-provider';
import { PhoneInputTrigger } from './phone-input-trigger';
import { PhoneInputWrapper } from './phone-input-wrapper';

export function PhoneInput(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <PhoneInputContextProvider>
      <PhoneInputWrapper {...props}>{children}</PhoneInputWrapper>
    </PhoneInputContextProvider>
  );
}

PhoneInput.NumberInput = PhoneInputNumberInput;
PhoneInput.CountrySelect = PhoneInputCountrySelect;
PhoneInput.Trigger = PhoneInputTrigger;
PhoneInput.Dialog = PhoneInputDialog;
PhoneInput.Item = PhoneInputItem;
