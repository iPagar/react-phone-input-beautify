import React, { ReactNode } from 'react';

import { CountryFlagImg } from './country-flag-img';
import { CountryFlagProvider } from './country-flag-provider';
import { CountryFlagSVG } from './country-flag-svg';

export function CountryFlag(props: {
  children?: ReactNode;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  country: string;
}) {
  const { children, country } = props;

  return (
    <CountryFlagProvider country={country}>{children}</CountryFlagProvider>
  );
}
CountryFlag.Img = CountryFlagImg;
CountryFlag.Svg = CountryFlagSVG;
