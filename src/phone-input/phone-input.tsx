import { ISO31661AssignedEntry } from 'iso-3166';
import React, { HTMLAttributes, useEffect, useMemo, useState } from 'react';

import { usePhoneState } from '../lib';
import { PhoneInputDialog, usePhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem, usePhoneInputItem } from './phone-input-item';
import {
  PhoneInputNumberInput,
  usePhoneInputNumberInput,
} from './phone-input-number-input';
import { PhoneInputContextProvider } from './phone-input-provider';
import { PhoneInputTrigger, usePhoneInputTrigger } from './phone-input-trigger';
import { PhoneInputWrapper } from './phone-input-wrapper';

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

type UsePhoneStateParams = Parameters<typeof usePhoneState>[0];

export function PhoneInputRoot(
  props: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
    onCountryChange?: (country: string) => void;
    onValidationChange?: (valid: boolean) => void;
  } & UsePhoneStateParams & {
      children?:
        | (({
            countryList,
            onPhoneChange,
            open,
            phone,
          }: {
            countryList: ISO31661AssignedEntry[];
            onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
            open: boolean;
            phone: string;
          }) => React.ReactNode)
        | React.ReactNode;
    }
) {
  const { children, onCountryChange, onValidationChange } = props;
  const state = usePhoneState();
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneProps = usePhone({ isDialogOpen: isOpen }, state);
  const [onOpenChange, setOnOpenChange] = useState<(open: boolean) => void>();

  useEffect(() => {
    if (onCountryChange) {
      onCountryChange(state.country);
    }
  }, [props, state.country]);

  const dialogState = useMemo(
    () => ({
      isDialogOpen: isOpen,
      onOpenChange,
      setIsDialogOpen: setIsOpen,
      setOnOpenChange,
    }),
    [isOpen, onOpenChange]
  );

  useEffect(() => {
    if (onOpenChange) {
      setOnOpenChange(onOpenChange);
    }
  }, [onOpenChange]);

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(state.isValid);
    }
  }, [onValidationChange, state.isValid]);

  return (
    <PhoneInputContextProvider
      dialog={dialogState}
      props={phoneProps}
      state={state}
    >
      <PhoneInputWrapper {...props}>
        {typeof children === 'function'
          ? children({
              countryList: state.countryList,
              onPhoneChange: (e) => {
                state.handlePhoneNumberChange(e.target.value);
              },
              open: isOpen,
              phone: state.phoneNumber,
            })
          : children}
      </PhoneInputWrapper>
    </PhoneInputContextProvider>
  );
}

const PhoneInput = {
  Dialog: PhoneInputDialog,
  Item: PhoneInputItem,
  NumberInput: PhoneInputNumberInput,
  Root: PhoneInputRoot,
  Trigger: PhoneInputTrigger,
};
export { PhoneInput };
