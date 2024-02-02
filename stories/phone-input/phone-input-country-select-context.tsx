import React, { useMemo, useState } from 'react';

const PhoneInputCountrySelectContext = React.createContext({});

export const usePhoneInputCountrySelect = () => {
  const context = React.useContext(PhoneInputCountrySelectContext);
  if (!context) {
    throw new Error(
      'usePhoneInputCountrySelect must be used within a PhoneInputCountrySelectProvider'
    );
  }
  return context as {
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTriggerRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
    >;
    triggerRef?: React.RefObject<HTMLButtonElement>;
  };
};

export function PhoneInputCountrySelectProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [triggerRef, setTriggerRef] =
    useState<React.RefObject<HTMLButtonElement> | null>(null);

  const contextValue = useMemo(
    () => ({
      isDialogOpen,
      setIsDialogOpen,
      setTriggerRef,
      triggerRef,
    }),
    [isDialogOpen, triggerRef]
  );

  return (
    <PhoneInputCountrySelectContext.Provider value={contextValue}>
      {children}
    </PhoneInputCountrySelectContext.Provider>
  );
}
