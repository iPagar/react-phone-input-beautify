import * as flags from 'country-flag-icons/react/3x2';
import React, { HTMLProps } from 'react';

import { useCountryFlag } from './country-flag-provider';

export function CountryFlagSVG(props: HTMLProps<flags.HTMLSVGElement>) {
  const { country } = useCountryFlag();
  const Flag = flags[country as keyof typeof flags];

  return <Flag {...props} />;
}
