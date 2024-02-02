import React from 'react';
export declare const usePhoneInputCountrySelect: () => {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTriggerRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLButtonElement>>
  >;
  triggerRef?: React.RefObject<HTMLButtonElement> | undefined;
};
export declare function PhoneInputCountrySelectProvider({
  children,
}: {
  children?: React.ReactNode;
}): React.JSX.Element;
