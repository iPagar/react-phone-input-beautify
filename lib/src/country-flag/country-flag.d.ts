import React, { ReactNode } from 'react';
import { CountryFlagImg } from './country-flag-img';
import { CountryFlagSVG } from './country-flag-svg';
export declare function CountryFlag(props: {
  children?: ReactNode;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  country: string;
}): React.JSX.Element;
export declare namespace CountryFlag {
  var Img: typeof CountryFlagImg;
  var Svg: typeof CountryFlagSVG;
}
