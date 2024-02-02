import React, { useMemo } from 'react';

const CountryFlagContext = React.createContext({});

export function useCountryFlag() {
  const context = React.useContext(CountryFlagContext);
  if (!context) {
    throw new Error(
      'CountryFlag compound components cannot be rendered outside the CountryFlag component'
    );
  }
  return context as {
    country: string;
  };
}

export function CountryFlagProvider({
  children,
  country,
}: {
  children?: React.ReactNode;
  country: string;
}) {
  const contextValue = useMemo(() => ({ country }), [country]);

  return (
    <CountryFlagContext.Provider value={contextValue}>
      {children}
    </CountryFlagContext.Provider>
  );
}
