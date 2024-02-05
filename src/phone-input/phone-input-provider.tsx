import React, { useMemo, useState } from 'react';

import { usePhoneState } from '../use-phone-state/use-phone-state';
import { usePhone } from './phone-input';

const PhoneInputContext = React.createContext({});
export function usePhoneInput() {
  const context = React.useContext(PhoneInputContext);
  if (!context) {
    throw new Error(
      'PhoneInput compound components cannot be rendered outside the PhoneInput component'
    );
  }
  return context as {
    dialogPosition?: { top: number };
    isDialogOpen: boolean;
    onOpenChange?: (open: boolean) => void;
    phoneInputRef?: React.RefObject<HTMLDivElement>;
    props: ReturnType<typeof usePhone>;
    setDialogPosition: React.Dispatch<React.SetStateAction<{ top: number }>>;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setOnOpenChange?: React.Dispatch<Function>;
    setPhoneInputRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLDivElement>>
    >;
    setTriggerRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
    >;
    state: ReturnType<typeof usePhoneState>;
    triggerRef?: React.RefObject<HTMLButtonElement>;
  };
}
export function PhoneInputContextProvider({
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
}) {
  const [phoneInputRef, setPhoneInputRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
  }>();
  const [triggerRef, setTriggerRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);
  const { isDialogOpen, onOpenChange, setIsDialogOpen, setOnOpenChange } =
    dialog;

  const contextValue = useMemo(
    () => ({
      dialogPosition,
      isDialogOpen,
      onOpenChange,
      phoneInputRef,
      props,
      setDialogPosition,
      setIsDialogOpen,
      setOnOpenChange,
      setPhoneInputRef,
      setTriggerRef,
      state,
      triggerRef,
    }),
    [
      phoneInputRef,
      dialogPosition,
      props,
      state,
      triggerRef,
      isDialogOpen,
      onOpenChange,
    ]
  );

  return (
    <PhoneInputContext.Provider value={contextValue}>
      {children}
    </PhoneInputContext.Provider>
  );
}
