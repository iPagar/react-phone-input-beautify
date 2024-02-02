import React from 'react';
export declare function useCountryFlag(): {
  country: string;
};
export declare function CountryFlagProvider({
  children,
  country,
}: {
  children?: React.ReactNode;
  country: string;
}): React.JSX.Element;
