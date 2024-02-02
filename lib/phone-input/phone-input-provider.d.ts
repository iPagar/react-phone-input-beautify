import React from 'react';
export declare function usePhoneInput(): {
  dialogPosition?:
    | {
        top: number;
      }
    | undefined;
  phoneInputRef?: React.RefObject<HTMLDivElement> | undefined;
  setDialogPosition: React.Dispatch<
    React.SetStateAction<{
      top: number;
    }>
  >;
  setPhoneInputRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement>>
  >;
};
export declare function PhoneInputContextProvider({
  children,
}: {
  children?: React.ReactNode;
}): React.JSX.Element;
