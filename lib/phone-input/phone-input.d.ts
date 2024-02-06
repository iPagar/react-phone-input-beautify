import { ISO31661AssignedEntry } from 'iso-3166';
import React, { HTMLAttributes } from 'react';
import { usePhoneState } from '../lib';
import { PhoneInputDialog } from './phone-input-dialog';
import { PhoneInputItem } from './phone-input-item';
import { PhoneInputTrigger } from './phone-input-trigger';
export declare function usePhone(
  props: {
    isDialogOpen: boolean;
  },
  state: ReturnType<typeof usePhoneState>
): {
  getListItemProps: (itemProps: { value: string }) => {
    'aria-selected': boolean;
    role: 'option';
  };
  numberInputProps: {
    className: string;
    type: string;
  };
  phoneInputDialogProps: {
    'aria-hidden': boolean;
  };
  triggerProps: {
    readonly 'aria-label': 'Select country';
    readonly type: 'button';
  };
};
type UsePhoneStateParams = Parameters<typeof usePhoneState>[0];
type ChildrenFunc = (props: {
  country: string;
  countryList: ISO31661AssignedEntry[];
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  phone: string;
}) => React.ReactNode;
export declare function PhoneInputRoot(
  props: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
    onCountryChange?: (country: string) => void;
    onPhoneChange?: (phone: string) => void;
    onValidationChange?: (valid: boolean) => void;
  } & UsePhoneStateParams & {
      children?:
        | (ChildrenFunc | React.ReactNode)[]
        | ChildrenFunc
        | React.ReactNode;
    }
): React.JSX.Element;
declare const PhoneInput: {
  Dialog: typeof PhoneInputDialog;
  Item: typeof PhoneInputItem;
  NumberInput: React.ForwardRefExoticComponent<
    React.InputHTMLAttributes<HTMLInputElement> &
      React.RefAttributes<HTMLInputElement>
  >;
  Portal: ({ children }: { children?: React.ReactNode }) => React.ReactPortal;
  Root: typeof PhoneInputRoot;
  Trigger: typeof PhoneInputTrigger;
};
export { PhoneInput };
