import React from 'react';
import { usePhoneState } from '../use-phone-state/use-phone-state';
import { usePhone } from './phone-input';
export declare function usePhoneInput(): {
  dialogPosition?:
    | {
        top: number;
      }
    | undefined;
  isDialogOpen: boolean;
  isPortal: boolean;
  onOpenChange?: ((open: boolean) => void) | undefined;
  phoneInputRef?: React.RefObject<HTMLDivElement> | undefined;
  props: ReturnType<typeof usePhone>;
  setDialogPosition: React.Dispatch<
    React.SetStateAction<{
      top: number;
    }>
  >;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPortal: React.Dispatch<React.SetStateAction<boolean>>;
  setOnOpenChange?: React.Dispatch<Function> | undefined;
  setPhoneInputRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement>>
  >;
  setTriggerRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLButtonElement>>
  >;
  state: ReturnType<typeof usePhoneState>;
  triggerRef?: React.RefObject<HTMLButtonElement> | undefined;
};
export declare function PhoneInputContextProvider({
  children,
  dialog,
  props,
  state,
}: {
  children?: React.ReactNode;
  dialog: {
    isDialogOpen: boolean;
    onOpenChange?: (open: boolean) => void;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setOnOpenChange?: React.Dispatch<(open: boolean) => void>;
  };
  props: ReturnType<typeof usePhone>;
  state: ReturnType<typeof usePhoneState>;
}): React.JSX.Element;
