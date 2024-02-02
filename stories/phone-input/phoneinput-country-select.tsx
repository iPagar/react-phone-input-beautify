import React from 'react';

import { PhoneInputCountrySelectProvider } from './phone-input-country-select-context';
import { usePhoneInput } from './phone-input-provider';

export function PhoneInputCountrySelect(props: { children?: React.ReactNode }) {
  usePhoneInput();
  const { children } = props;

  return (
    <PhoneInputCountrySelectProvider>
      {children}
    </PhoneInputCountrySelectProvider>
  );
}
