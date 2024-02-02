import React, { useMemo, useState } from 'react';

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
    phoneInputRef?: React.RefObject<HTMLDivElement>;
    setDialogPosition: React.Dispatch<React.SetStateAction<{ top: number }>>;
    setPhoneInputRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLDivElement>>
    >;
  };
}
export function PhoneInputContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [phoneInputRef, setPhoneInputRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
  }>();

  const contextValue = useMemo(
    () => ({
      dialogPosition,
      phoneInputRef,
      setDialogPosition,
      setPhoneInputRef,
    }),
    [phoneInputRef, dialogPosition]
  );

  return (
    <PhoneInputContext.Provider value={contextValue}>
      {children}
    </PhoneInputContext.Provider>
  );
}
