import React, { HTMLAttributes } from 'react';

import { usePhoneState } from '../lib';
import { PhoneInputCountrySelect } from './phone-input-country-select';
import { PhoneInputDialog, usePhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem, usePhoneInputItem } from './phone-input-item';
import {
  PhoneInputNumberInput,
  usePhoneInputNumberInput,
} from './phone-input-number-input';
import { PhoneInputContextProvider } from './phone-input-provider';
import { PhoneInputTrigger, usePhoneInputTrigger } from './phone-input-trigger';
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

export function usePhone(
  props: {
    isDialogOpen: boolean;
  },
  state: ReturnType<typeof usePhoneState>
) {
  const { numberInputProps } = usePhoneInputNumberInput();
  const { getListItemProps } = usePhoneInputItem({
    selected: state.country,
  });
  const { triggerProps } = usePhoneInputTrigger();
  const { phoneInputDialogProps } = usePhoneInputDialog({
    open: props.isDialogOpen,
  });

  return {
    getListItemProps,
    numberInputProps,
    phoneInputDialogProps,
    triggerProps,
  };
}
