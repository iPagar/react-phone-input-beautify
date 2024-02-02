import { HTMLProps } from 'react';

import { useCountryFlag } from './country-flag-provider';

export function CountryFlagImg(props: HTMLProps<HTMLImageElement>) {
  const { country } = useCountryFlag();

  return (
    <img
      {...props}
      alt={country}
      src={`https://flagsapi.com/${country}/flat/64.png`}
    />
  );
}
